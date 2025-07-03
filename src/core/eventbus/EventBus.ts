// core/event-bus/TypedEventBus.ts

import type { EventMap } from './EventMap'

type EventName = keyof EventMap
type Handler<K extends EventName> = (payload: EventMap[K]) => void | Promise<void>

export class TypedEventBus {
  private listeners = new Map<EventName, Set<Handler<any>>>()

  on<K extends EventName>(event: K, handler: Handler<K>) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set())
    }
    this.listeners.get(event)!.add(handler)
  }

  off<K extends EventName>(event: K, handler: Handler<K>) {
    this.listeners.get(event)?.delete(handler)
  }

  async emit<K extends EventName>(event: K, payload: EventMap[K]) {
    const handlers = this.listeners.get(event)
    if (!handlers) return

    for (const handler of handlers) {
      await handler(payload)
    }
  }

  clear(event?: EventName) {
    if (event) {
      this.listeners.delete(event)
    } else {
      this.listeners.clear()
    }
  }
}

// ✅ singleton instance
export const eventBus = new TypedEventBus()
