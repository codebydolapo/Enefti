/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface MarketplaceInterface extends utils.Interface {
  functions: {
    "buyNFT(address,address,uint256)": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "getTokenURL(uint256)": FunctionFragment;
    "getTotalSupply()": FunctionFragment;
    "minterAddress()": FunctionFragment;
    "owner()": FunctionFragment;
    "pay(address)": FunctionFragment;
    "totalEarnings()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyNFT"
      | "getBalance"
      | "getTokenURL"
      | "getTotalSupply"
      | "minterAddress"
      | "owner"
      | "pay"
      | "totalEarnings"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyNFT",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenURL",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minterAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pay",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalEarnings",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "buyNFT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenURL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minterAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalEarnings",
    data: BytesLike
  ): Result;

  events: {
    "e_pay(address,address,uint256)": EventFragment;
    "e_rent(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "e_pay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "e_rent"): EventFragment;
}

export interface e_payEventObject {
  _to: string;
  _from: string;
  _amount: BigNumber;
}
export type e_payEvent = TypedEvent<
  [string, string, BigNumber],
  e_payEventObject
>;

export type e_payEventFilter = TypedEventFilter<e_payEvent>;

export interface e_rentEventObject {
  _sender: string;
  _recipient: string;
  _tokenId: BigNumber;
}
export type e_rentEvent = TypedEvent<
  [string, string, BigNumber],
  e_rentEventObject
>;

export type e_rentEventFilter = TypedEventFilter<e_rentEvent>;

export interface Marketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketplaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyNFT(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getBalance(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenURL(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    minterAddress(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pay(
      _to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalEarnings(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  buyNFT(
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getBalance(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenURL(
    _tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  minterAddress(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pay(
    _to: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalEarnings(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    buyNFT(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getBalance(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenURL(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    minterAddress(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pay(
      _to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    totalEarnings(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "e_pay(address,address,uint256)"(
      _to?: null,
      _from?: null,
      _amount?: null
    ): e_payEventFilter;
    e_pay(_to?: null, _from?: null, _amount?: null): e_payEventFilter;

    "e_rent(address,address,uint256)"(
      _sender?: null,
      _recipient?: null,
      _tokenId?: null
    ): e_rentEventFilter;
    e_rent(
      _sender?: null,
      _recipient?: null,
      _tokenId?: null
    ): e_rentEventFilter;
  };

  estimateGas: {
    buyNFT(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getBalance(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenURL(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    minterAddress(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pay(
      _to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalEarnings(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyNFT(
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getBalance(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenURL(
      _tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minterAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pay(
      _to: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalEarnings(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
