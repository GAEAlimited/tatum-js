import * as process from 'process'
import { Network, TatumSDK, Tezos } from '../../../service'
import { e2eUtil } from '../../e2e.util'

const getTezosRpc = async (testnet?: boolean) =>
  await TatumSDK.init<Tezos>({
    network: testnet ? Network.TEZOS_TESTNET : Network.TEZOS,
    apiKey: {
      v4: testnet ? process.env.V4_API_KEY_TESTNET : process.env.V4_API_KEY_MAINNET,
    },
    verbose: e2eUtil.isVerbose,
  })

  describe.each([true, false])(`Tezos`, (testnet: boolean) => {
    describe(`${testnet ? 'Testnet' : 'Mainnet'}`, () => {
      it('getConfig', async () => {
        const tatum = await getTezosRpc(testnet)
        const result = await tatum.rpc.getConfig()
        await tatum.destroy()
        expect(result).toBeDefined()
      })

      it('getBlock', async () => {
        const tatum = await getTezosRpc(testnet)
        const result = await tatum.rpc.getBlock({ block: 'head', chainId: 'main' })
        await tatum.destroy()
        expect(result).toBeDefined()
      })

      it('getBlocksHead', async () => {
        const tatum = await getTezosRpc(testnet)
        const result = await tatum.rpc.getBlocksHead({ chainId: 'main' })
        await tatum.destroy()
        expect(result).toBeDefined()
      })

      it('getCheckpoint', async () => {
        const tatum = await getTezosRpc(testnet)
        const result = await tatum.rpc.getCheckpoint({ chainId: 'main' })
        await tatum.destroy()
        expect(result).toBeDefined()
      })

      if (!testnet) {
        it('getContract', async () => {
          const tatum = await getTezosRpc(testnet)
          const result = await tatum.rpc.getContracts({
            chainId: 'main',
            contractId: 'KT1Hkg5qeNhfwpKW4fXvq7HGZB9z2EnmCCA9',
            block: '3000000'
          })
          await tatum.destroy()
          expect(result).toBeDefined()
        })
      }
    })
  })
