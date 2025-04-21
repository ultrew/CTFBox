
import { ProfessionData } from "@/types/tool";

export const cryptoPrivacyData: ProfessionData = {
  profession: "crypto-privacy",
  title: "Cryptography & Privacy Tools",
  description: "Tools used for encryption, secure communications, and protecting privacy in the digital world.",
  icon: "file-lock",
  categories: [
    {
      name: "Encryption Tools",
      description: "Tools for encrypting data and communications",
      tools: [
        {
          name: "GnuPG",
          description: "Complete and free implementation of the OpenPGP standard for encrypting and signing data and communications.",
          homepage: "https://gnupg.org/",
          github: "https://github.com/gpg/gnupg",
          tags: ["open-source", "encryption", "essential"]
        },
        {
          name: "VeraCrypt",
          description: "Disk encryption software based on TrueCrypt that creates encrypted containers or entire encrypted drives.",
          homepage: "https://www.veracrypt.fr/",
          github: "https://github.com/veracrypt/VeraCrypt",
          tags: ["open-source", "disk-encryption", "cross-platform"]
        },
        {
          name: "Cryptomator",
          description: "Free cloud encryption tool that encrypts your files before uploading to cloud storage.",
          homepage: "https://cryptomator.org/",
          github: "https://github.com/cryptomator/cryptomator",
          tags: ["open-source", "cloud-encryption", "cross-platform"]
        },
        {
          name: "KeePassXC",
          description: "Cross-platform password manager with modern and advanced features.",
          homepage: "https://keepassxc.org/",
          github: "https://github.com/keepassxreboot/keepassxc",
          tags: ["open-source", "password-manager", "cross-platform"]
        },
        {
          name: "OpenSSL",
          description: "Robust, commercial-grade, and full-featured toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols.",
          homepage: "https://www.openssl.org/",
          github: "https://github.com/openssl/openssl",
          tags: ["open-source", "cryptography", "TLS"]
        }
      ]
    },
    {
      name: "Privacy Tools",
      description: "Tools to enhance privacy and anonymity online",
      tools: [
        {
          name: "Tor Browser",
          description: "Web browser that anonymizes web traffic using the Tor network.",
          homepage: "https://www.torproject.org/",
          github: "https://github.com/torproject/tor",
          tags: ["open-source", "anonymity", "browser"]
        },
        {
          name: "Signal",
          description: "Encrypted messaging application with focus on privacy and security.",
          homepage: "https://signal.org/",
          github: "https://github.com/signalapp",
          tags: ["open-source", "encrypted-messaging", "mobile"]
        },
        {
          name: "ProtonMail",
          description: "Secure email service with end-to-end encryption.",
          homepage: "https://protonmail.com/",
          tags: ["freemium", "encrypted-email", "web"]
        },
        {
          name: "ProtonVPN",
          description: "VPN service created by the team behind ProtonMail, focused on security and privacy.",
          homepage: "https://protonvpn.com/",
          tags: ["freemium", "vpn", "cross-platform"]
        },
        {
          name: "uBlock Origin",
          description: "Efficient wide-spectrum blocker for browsers that blocks ads, trackers, and malware sites.",
          github: "https://github.com/gorhill/uBlock",
          tags: ["open-source", "ad-blocker", "privacy"]
        },
        {
          name: "Privacy Badger",
          description: "Browser extension that automatically learns to block invisible trackers.",
          homepage: "https://privacybadger.org/",
          github: "https://github.com/EFForg/privacybadger",
          tags: ["open-source", "anti-tracking", "browser-extension"]
        }
      ]
    },
    {
      name: "Cryptocurrency Tools",
      description: "Tools for cryptocurrency security and privacy",
      tools: [
        {
          name: "Ledger",
          description: "Hardware wallet for securely storing cryptocurrency private keys.",
          homepage: "https://www.ledger.com/",
          tags: ["paid", "hardware-wallet", "cryptocurrency"]
        },
        {
          name: "Trezor",
          description: "Hardware wallet for cryptocurrency with open-source firmware.",
          homepage: "https://trezor.io/",
          github: "https://github.com/trezor/trezor-firmware",
          tags: ["paid", "hardware-wallet", "open-source"]
        },
        {
          name: "Electrum",
          description: "Lightweight Bitcoin wallet with enhanced security features.",
          homepage: "https://electrum.org/",
          github: "https://github.com/spesmilo/electrum",
          tags: ["open-source", "bitcoin-wallet", "desktop"]
        },
        {
          name: "Monero",
          description: "Privacy-focused cryptocurrency that obfuscates senders, recipients, and amounts of transactions.",
          homepage: "https://www.getmonero.org/",
          github: "https://github.com/monero-project/monero",
          tags: ["open-source", "cryptocurrency", "privacy"]
        },
        {
          name: "Bisq",
          description: "Decentralized bitcoin exchange network that enables privacy-focused trading.",
          homepage: "https://bisq.network/",
          github: "https://github.com/bisq-network/bisq",
          tags: ["open-source", "decentralized-exchange", "privacy"]
        }
      ]
    }
  ]
};
