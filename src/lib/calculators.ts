// Calculator math, ported 1:1 from the app's domain layer so a visitor and a user
// see the same number for the same inputs. Sources (ProyectoGymLab/gymlab-app):
//   src/domain/prs.ts → estimate1RM (Brzycki, single source of truth for records)
//   src/domain/calculators/oneRepMax.ts → Epley
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
