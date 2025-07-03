import { eventBus } from "@/core/eventbus/EventBus"
import { redirect } from "next/navigation"

export const loginSync = () => {
  eventBus.on('user.loggedIn', async ({userId}) => {
    await redirect('/dashboard')
  })
}