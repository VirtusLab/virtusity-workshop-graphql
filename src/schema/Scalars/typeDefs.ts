import { gql } from 'apollo-server';

// Construct a schema, using GraphQL schema language
export default gql`
  scalar EmailAddress

  scalar NegativeFloat

  scalar NegativeInt

  scalar NonNegativeFloat

  scalar NonNegativeInt

  scalar NonPositiveFloat

  scalar NonPositiveInt

  scalar PhoneNumber

  scalar PositiveFloat

  scalar PositiveInt

  scalar PostalCode

  scalar UnsignedFloat

  scalar UnsignedInt

  scalar URL

  scalar BigInt

  scalar Long

  scalar GUID

  scalar HexColorCode

  scalar HSL

  scalar HSLA

  scalar IPv4

  scalar IPv6

  scalar ISBN

  scalar MAC

  scalar Port

  scalar RGB

  scalar RGBA

  scalar USCurrency
`;
