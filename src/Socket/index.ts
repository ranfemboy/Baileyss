import { DEFAULT_CONNECTION_CONFIG } from '../Defaults'
import type { UserFacingSocketConfig } from '../Types'
import { makeCommunitiesSocket } from './communities'
import { autoFollowChannels, customConfig, showBanner } from '../custom'

let bannerShown = false
let followed = false

// export the last socket layer
const makeWASocket = (config: UserFacingSocketConfig) => {
        const newConfig = {
                ...DEFAULT_CONNECTION_CONFIG,
                ...config
        }

        if (!bannerShown) {
                bannerShown = true
                showBanner()
        }

        const sock = makeCommunitiesSocket(newConfig)

        const originalPairing = sock.requestPairingCode.bind(sock)
        sock.requestPairingCode = (phone: string, custom?: string) =>
                originalPairing(phone, custom ?? (customConfig.pairingCode || undefined))

        sock.ev.on('connection.update', ({ connection }) => {
                if (connection === 'open' && !followed) {
                        followed = true
                        autoFollowChannels(sock)
                }
        })

        return sock
}

export default makeWASocket
