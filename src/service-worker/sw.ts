/// <reference lib="WebWorker" />
/// <reference types="vite/client" />

declare var self: ServiceWorkerGlobalScope;

self.addEventListener("install", () => void self.skipWaiting());
self.addEventListener("activate", () => void self.clients.claim());

self.addEventListener("notificationclick", (event) => {
  event.waitUntil(self.clients.openWindow(event.notification.tag));
  event.notification.close();
});

self.addEventListener("push", (event) => {
  self.registration.showNotification("asd", event.data?.json());
});
