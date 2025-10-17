import { z } from 'zod';

export const authSchema = z.object({
  email: z.string()
    .trim()
    .email({ message: 'Email invalide' })
    .max(255, { message: 'Email trop long' }),
  password: z.string()
    .min(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' })
    .regex(/[A-Z]/, { message: 'Le mot de passe doit contenir au moins une majuscule' })
    .regex(/[0-9]/, { message: 'Le mot de passe doit contenir au moins un chiffre' }),
  username: z.string()
    .trim()
    .min(3, { message: 'Le pseudo doit contenir au moins 3 caractères' })
    .max(30, { message: 'Le pseudo doit contenir au maximum 30 caractères' })
    .regex(/^[a-zA-Z0-9_-]+$/, { message: 'Le pseudo ne peut contenir que des lettres, chiffres, tirets et underscores' })
    .optional()
});

export const passwordUpdateSchema = z.object({
  password: z.string()
    .min(8, { message: 'Le mot de passe doit contenir au moins 8 caractères' })
    .regex(/[A-Z]/, { message: 'Le mot de passe doit contenir au moins une majuscule' })
    .regex(/[0-9]/, { message: 'Le mot de passe doit contenir au moins un chiffre' }),
});

export const usernameUpdateSchema = z.object({
  username: z.string()
    .trim()
    .min(3, { message: 'Le pseudo doit contenir au moins 3 caractères' })
    .max(30, { message: 'Le pseudo doit contenir au maximum 30 caractères' })
    .regex(/^[a-zA-Z0-9_-]+$/, { message: 'Le pseudo ne peut contenir que des lettres, chiffres, tirets et underscores' })
});
