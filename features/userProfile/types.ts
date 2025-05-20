import { z } from "zod";

export const UserSettings = z.object({
  visibility: z.object({
    email: z.boolean().default(true),
    name: z.boolean().default(true),
    profilePhoto: z.boolean().default(true),
  }),
  useBiometrics: z.boolean().default(true),
});

export type UserSettings = z.infer<typeof UserSettings>;

export const SupportedWalletChains = z.union([z.literal("solana"), z.literal("stellar")]);
export type SupportedWalletChains = z.infer<typeof SupportedWalletChains>;

export const AccountInfo = z.object({
  publicKey: z.string(),
  chain: SupportedWalletChains,
  index: z.number().int().gte(0),
  name: z.string(),
  description: z.string().optional(),
  isPrivate: z.boolean(),
  isActivated: z.boolean().default(false),
  isSelected: z.boolean().default(false),
});
export type AccountInfo = z.infer<typeof AccountInfo>;

export const UserPreferences = z.object({
  username: z.string(),
  name: z.string(),
  email: z.string(), // @TODO: Force users to provide email, migrate existing users
  photoUrl: z.string().optional(),
  settings: UserSettings,
  baseCurrency: z.string(),
  language: z.string().default("en"),
});
export type UserPreferences = z.infer<typeof UserPreferences>;

export const UserProfile = z.object({
  ...UserPreferences.shape,
  id: z.string(),
  accountInfos: z.array(AccountInfo),
});

export type UserProfile = z.infer<typeof UserProfile>;

export const PublicAccountInfo = AccountInfo.pick({
  publicKey: true,
  chain: true,
  index: true,
  isActivated: true,
  isPrivate: true,
});

export type PublicAccountInfo = z.infer<typeof PublicAccountInfo>;

// This can not be used like this as Typescript gets confused by the omit and extend...
// export const PublicUserProfile = UserProfile.omit({
//   baseCurrency: true,
//   accountInfos: true,
//   settings: true,
//   language: true,
// }).extend({
//   accountInfos: z.array(PublicAccountInfo),
//   settings: UserSettings.pick({ visibility: true }),
// });
export const PublicUserProfile = z.object({
  username: z.string(),
  name: z.string(),
  email: z.string(),
  photoUrl: z.string().optional(),
  id: z.string(),
  accountInfos: z.array(PublicAccountInfo),
  settings: UserSettings.pick({ visibility: true }),
});
export type PublicUserProfile = z.infer<typeof PublicUserProfile>;
