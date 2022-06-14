import { REPLACE_ME_WITH_TATUM_API_KEY } from '@tatumio/shared-testing-common'
import { SolanaNftMetadata } from '../schema'
import { TatumSolanaSDK } from '../solana.sdk'

jest.setTimeout(99999)

describe('SolanaSDK - tx', () => {
  const sdk = TatumSolanaSDK({
    apiKey: REPLACE_ME_WITH_TATUM_API_KEY,
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it.skip('should send SOL', async () => {
    const tx = await sdk.transaction.send({
      from: 'FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ',
      fromPrivateKey:
        '3abc79a31093e4cfa4a724e94a44906cbbc3a32e2f75f985a28616676a5dbaf1de8d82a7e1d0561bb0e1b729c7a9b9b1708cf2803ad0ca928a332587ace391ad',
      to: 'ET7gwtm6QZfjRQboBLjxZ4PSHDAH7y6AAiAJE8sPaWvv',
      amount: '0.001',
    })
    expect(tx).toBeDefined()
  })

  // it('should send SOL KMS', async () => {
  //   const txData = await send(
  //     {
  //       from: 'FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ',
  //       signatureId: '4ca4c0e6-33a3-4b00-a6dc-859cc1f86419',
  //       to: 'ET7gwtm6QZfjRQboBLjxZ4PSHDAH7y6AAiAJE8sPaWvv',
  //       amount: '0.001',
  //     },
  //     'https://api.testnet.solana.com',
  //   )
  //
  //   console.log(
  //     await signKMSTransaction(
  //       { hashes: [], id: '', serializedTransaction: JSON.stringify(txData) },
  //       '3abc79a31093e4cfa4a724e94a44906cbbc3a32e2f75f985a28616676a5dbaf1de8d82a7e1d0561bb0e1b729c7a9b9b1708cf2803ad0ca928a332587ace391ad',
  //       'https://api.testnet.solana.com',
  //     ),
  //   )
  // })

  it.skip('should mint NFT', async () => {
    console.log(
      await sdk.transaction.mintNft({
        chain: 'SOL',
        from: 'FykfMwA9WNShzPJbbb9DNXsfgDgS3XZzWiFgrVXfWoPJ',
        fromPrivateKey:
          '2B7RyZEuZr9PpfRrn7nYhSXhjeuzte65UYeeKJFQJCvsi3ZQJk5AfmWptwDpD2Xtz22nv1aTg5rmKq13ggB7Fkep',
        to: 'FZAS4mtPvswgVxbpc117SqfNgCDLTCtk5CoeAtt58FWU',
        metadata: new SolanaNftMetadata('Tatum', 'TTM', 'https://tatum.io/images/logo/logo.svg', 0),
      }),
    )
  })

  it.skip('should transfer NFT', async () => {
    console.log(
      await sdk.transaction.transferNft({
        chain: 'SOL',
        from: 'FZAS4mtPvswgVxbpc117SqfNgCDLTCtk5CoeAtt58FWU',
        fromPrivateKey:
          '54uMYxWikks34Vb7ckU5pW13KMDoc5EjJLV7DDzexFZddf1CCR9dfztBvgLbbK7jZj2iaJwfV6X9GZznSBx6Lnct',
        to: 'ET7gwtm6QZfjRQboBLjxZ4PSHDAH7y6AAiAJE8sPaWvv',
        contractAddress: 'JCkpeMvK6HbdhkQFhKnTh6fF889y12WaSBg793aA1Zqu',
      }),
    )
  })
})
