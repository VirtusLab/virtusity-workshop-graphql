import {
  EmailAddressResolver,
  NegativeFloatResolver,
  NegativeIntResolver,
  NonNegativeFloatResolver,
  NonNegativeIntResolver,
  NonPositiveFloatResolver,
  NonPositiveIntResolver,
  PhoneNumberResolver,
  PositiveFloatResolver,
  PositiveIntResolver,
  PostalCodeResolver,
  UnsignedFloatResolver,
  UnsignedIntResolver,
  URLResolver,
  BigIntResolver,
  LongResolver,
  GUIDResolver,
  HexColorCodeResolver,
  HSLResolver,
  HSLAResolver,
  IPv4Resolver,
  IPv6Resolver,
  ISBNResolver,
  MACResolver,
  PortResolver,
  RGBResolver,
  RGBAResolver,
  USCurrencyResolver,
} from 'graphql-scalars';

import { Resolvers } from '../types';

const resolvers: Resolvers = {
  EmailAddress: EmailAddressResolver,
  NegativeFloat: NegativeFloatResolver,
  NegativeInt: NegativeIntResolver,
  NonNegativeFloat: NonNegativeFloatResolver,
  NonNegativeInt: NonNegativeIntResolver,
  NonPositiveFloat: NonPositiveFloatResolver,
  NonPositiveInt: NonPositiveIntResolver,
  PhoneNumber: PhoneNumberResolver,
  PositiveFloat: PositiveFloatResolver,
  PositiveInt: PositiveIntResolver,
  PostalCode: PostalCodeResolver,
  UnsignedFloat: UnsignedFloatResolver,
  UnsignedInt: UnsignedIntResolver,
  URL: URLResolver,
  BigInt: BigIntResolver,
  Long: LongResolver,
  GUID: GUIDResolver,
  HexColorCode: HexColorCodeResolver,
  HSL: HSLResolver,
  HSLA: HSLAResolver,
  IPv4: IPv4Resolver,
  IPv6: IPv6Resolver,
  ISBN: ISBNResolver,
  MAC: MACResolver,
  Port: PortResolver,
  RGB: RGBResolver,
  RGBA: RGBAResolver,
  USCurrency: USCurrencyResolver,
};

export default resolvers;
