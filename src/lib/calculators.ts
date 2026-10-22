// Calculator math, ported 1:1 from the app's domain layer so a visitor and a user
// see the same number for the same inputs. Sources (ProyectoGymLab/gymlab-app):
//   src/domain/prs.ts → estimate1RM (Brzycki, single source of truth for records)
//   src/domain/calculators/oneRepMax.ts → Epley
//   src/domain/calculators/imc.ts → BMI and its WHO bands
//   src/domain/calculators/tdee.ts → Mifflin-St Jeor, activity factors and targets
// A change there must be mirrored here; the rounding is part of the contract.

/** Rounds to the nearest multiple of `step`, as the app does with 0.5 kg. */
export const roundToNearest = (value: number, step: number): number =>
  Math.round(value / step) * step;

/** Epley. One rep returns the weight itself, as in the app. */
export const epley1RM = (weightKg: number, reps: number): number => {
  if (weightKg <= 0 || reps <= 0) return 0;
  if (reps <= 1) return roundToNearest(weightKg, 0.5);
  return roundToNearest(weightKg * (1 + reps / 30), 0.5);
};

/** Brzycki. Undefined at 37 reps and beyond, so the app clamps to 0. */
export const brzycki1RM = (weightKg: number, reps: number): number => {
  if (weightKg <= 0 || reps <= 0) return 0;
  if (reps === 1) return weightKg;
  if (reps >= 37) return 0;
  return Math.round(weightKg * (36 / (37 - reps)) * 10) / 10;
};

/** Difference between both estimates, one decimal, positive when Brzycki is higher. */
export const oneRepMaxDelta = (weightKg: number, reps: number): number =>
  Math.round((brzycki1RM(weightKg, reps) - epley1RM(weightKg, reps)) * 10) / 10;

// ---------------------------------------------------------------------------
// BMI, from src/domain/calculators/imc.ts
// ---------------------------------------------------------------------------

export type IMCCategory = 'underweight' | 'normal' | 'overweight' | 'obese';

/** BMI = weight (kg) / height (m)², rounded to one decimal as the app does. */
export const calcIMC = (weightKg: number, heightCm: number): number => {
  if (weightKg <= 0 || heightCm <= 0) return 0;
  const heightM = heightCm / 100;
  return Math.round((weightKg / (heightM * heightM)) * 10) / 10;
};

/** WHO category thresholds, in the app's order: 18.5, 25, 30. */
export const IMC_THRESHOLDS = [18.5, 25, 30];

/** WHO band: underweight < 18.5 ≤ normal < 25 ≤ overweight < 30 ≤ obese. */
export const getIMCCategory = (imc: number): IMCCategory => {
  if (imc < IMC_THRESHOLDS[0]) return 'underweight';
  if (imc < IMC_THRESHOLDS[1]) return 'normal';
  if (imc < IMC_THRESHOLDS[2]) return 'overweight';
  return 'obese';
};

// ---------------------------------------------------------------------------
// Daily energy expenditure, from src/domain/calculators/tdee.ts
// ---------------------------------------------------------------------------

export type Sex = 'male' | 'female';

export type ActivityLevel =
  | 'sedentary'
  | 'light'
  | 'moderate'
  | 'active'
  | 'very_active';

export const ACTIVITY_FACTORS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

/** Cap for the daily deficit: the app never cuts more than 500 kcal. */
export const MAX_DEFICIT_KCAL = 500;

/** Mifflin-St Jeor. Any missing input returns 0, as in the app. */
export const calcBMR = (
  weightKg: number,
  heightCm: number,
  age: number,
  sex: Sex,
): number => {
  if (weightKg <= 0 || heightCm <= 0 || age <= 0) return 0;
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return sex === 'male' ? base + 5 : base - 161;
};

/** TDEE = BMR × activity factor, rounded to whole kcal. */
export const calcTDEE = (
  weightKg: number,
  heightCm: number,
  age: number,
  sex: Sex,
  activityLevel: ActivityLevel,
): number =>
  Math.round(calcBMR(weightKg, heightCm, age, sex) * ACTIVITY_FACTORS[activityLevel]);

/** Deficit target: 20% of TDEE, capped at 500 kcal below maintenance. */
export const kcalDeficit = (tdee: number): number => {
  if (tdee <= 0) return 0;
  return Math.round(tdee - Math.min(Math.round(tdee * 0.2), MAX_DEFICIT_KCAL));
};

export interface TDEERange {
  bmr: number;
  tdee: number;
  deficit: number;
  surplus: number;
}

/**
 * The four numbers the calorie page shows. `bmr` is derived from the rounded
 * TDEE, not from calcBMR, exactly as the app's calcTDEERange does it.
 */
export const tdeeRange = (
  weightKg: number,
  heightCm: number,
  age: number,
  sex: Sex,
  activityLevel: ActivityLevel,
): TDEERange => {
  const tdee = calcTDEE(weightKg, heightCm, age, sex, activityLevel);
  return {
    bmr: Math.round(tdee / ACTIVITY_FACTORS[activityLevel]),
    tdee,
    deficit: kcalDeficit(tdee),
    surplus: Math.round(tdee * 1.15),
  };
};
