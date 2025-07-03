// core/event-bus/EventMap.ts

export interface EventMap {
  'user.loggedIn': { userId: string }
  'auth.tokenExpired': { userId: string; reason: string }
  'profile.updated': { userId: string; updatedAt: Date }
  // добавляй любые события здесь
}
