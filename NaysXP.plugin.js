/**
 * @name NaysXP
 * @author Naystie
 * @authorId 344871509677965313
 * @version 0.1
 * @description İstediğiniz kanala istediğiniz sürede bir mesaj göndermenizi sağlar.
 * @invite Jx3TjNS
 * @website https://naystie.com/
 * @source https://github.com/mwittrien/BetterDiscordAddons/tree/master/Plugins/ImageUtilities/
 * @updateUrl https://mwittrien.github.io/BetterDiscordAddons/Plugins/ImageUtilities/ImageUtilities.plugin.js
 */

const settings = {
  channelId: "KANAL ID", // Mesaj göndermek istediğiniz kanalın ID'si.
  messageContent: "Merhaba!", // Kanala göndermek istediğiniz mesaj.
  interval: 60000 // Mesaj gönderme aralığı (milisaniye cinsinden).
};

function sendHelloMessage() {
  const channel = findChannelById(settings.channelId);
  if (!channel) {
    console.error(`Kanal bulunamadı: ${settings.channelId}`);
    return;
  }
  channel.sendMessage(settings.messageContent).catch(console.error);
}

setInterval(sendHelloMessage, settings.interval);

function findChannelById(id) {
  const channelStore = findModule("getChannel");
  return channelStore.getChannel(id);
}

function findModule(moduleName) {
  const req = window.webpackJsonp([], ['__extra_id__'], ['webpack_inject_0']);
  const found = req.find((module) => module && module.exports && module.exports[moduleName]);
  if (found) {
    return found.exports[moduleName];
  }
  throw new Error(`Meta bulunamadı: ${moduleName}`);
}