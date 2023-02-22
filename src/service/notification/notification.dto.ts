import { Chain, TatumChain } from '../tatum/tatum.dto'

export interface GetAllNotificationsQuery {
  pageSize?: number
  offset?: number
  address?: string
}

export type AddressTransactionNotification = {
  id: string
  chain: Chain
  address: string
  url: string
  type: NotificationType.ADDRESS_TRANSACTION,
}

export interface AddressNotificationDetail {
  address: string
  chain: Chain
  url: string
}

export interface AddressNotification extends AddressNotificationDetail {
  id: string
}

export enum NotificationType {
  ADDRESS_TRANSACTION = 'ADDRESS_TRANSACTION',
}

export interface AddressTransactionNotificationApi {
  id: string
  type: NotificationType.ADDRESS_TRANSACTION
  attr: {
    chain: TatumChain
    address: string
    url: string
  }
}

export interface GetAllExecutedWebhooksQuery {
  pageSize?: number
  offset?: number
  direction?: 'asc' | 'desc'
  filterFailed?: boolean
}

export interface Webhook {
  type: NotificationType,
  id: string,
  subscriptionId: string,
  url: string
  data: {
    address: string,
    amount: string,
    asset: string,
    blockNumber: number,
    txId: string,
    type: string,
    chain: string,
    subscriptionType: NotificationType
  }
  nextTime: number
  timestamp: number
  retryCount: number
  failed: boolean
  response: {
    code: number
    data: string
    networkError: boolean
  }
}

export interface Listen {
  chain: Chain
  address: string
  handle:  (webhook: Webhook) => Promise<void> | void
  interval: number
}

export interface OnTransaction { intervalId: NodeJS.Timeout, subscriptionId: string }
