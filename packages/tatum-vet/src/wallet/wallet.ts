import { Currency, TESTNET_DERIVATION_PATH, Wallet } from '@tatumio/tatum-core';
import {generateMnemonic, mnemonicToSeed} from 'bip39';
import {hdkey as ethHdKey} from 'ethereumjs-wallet';
import {
    VET_DERIVATION_PATH,
} from '../constants';

/**
 * Generate VeChain wallet
 * @param testnet testnet or mainnet version of address
 * @param mnem mnemonic seed to use
 * @returns wallet
 */
export const generateVetWallet = async (testnet: boolean, mnem: string): Promise<Wallet> => {
    const path = testnet ? TESTNET_DERIVATION_PATH : VET_DERIVATION_PATH
    const hdwallet = ethHdKey.fromMasterSeed(await mnemonicToSeed(mnem))
    const derivePath = hdwallet.derivePath(path)
    return {
        xpub: derivePath.publicExtendedKey().toString(),
        mnemonic: mnem
    }
}

/**
 * Generate wallet
 * @param currency blockchain to generate wallet for
 * @param testnet testnet or mainnet version of address
 * @param mnemonic mnemonic seed to use. If not present, new one will be generated
 * @returns wallet or a combination of address and private key
 */
export const generateWallet = (currency: Currency, testnet: boolean, mnemonic?: string) => {
    const mnem = mnemonic ? mnemonic : generateMnemonic(256)
    return generateVetWallet(testnet, mnem)
}
