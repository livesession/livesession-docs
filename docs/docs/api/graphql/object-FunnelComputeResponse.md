---
title: FunnelComputeResponse
---
## !description

Response for funnel compute

## !!references FunnelComputeResponse

### !canonical object-FunnelComputeResponse

### !context

#### !graphqlName FunnelComputeResponse

#### !graphqlType object

### !examples

### !!definitions

#### !title Fields

#### !!properties cached_response

!name cached\_response

!type CachedResponse!



##### !!properties ttl

!name ttl

!type String!



##### !!properties id

!name id

!type String!



##### !!properties computed_at

!name computed\_at

!type UnixTimestamp!



##### !!properties fresh

!name fresh

!type Boolean!



#### !!properties total_sessions

!name total\_sessions

!type Int!



#### !!properties total_visitors

!name total\_visitors

!type Int!



#### !!properties total_events

!name total\_events

!type Int!



#### !!properties conversion_value

!name conversion\_value

!type FunnelConversionValueResponse



##### !!properties value

!name value

!type Float!



##### !!properties label

!name label

!type String!



#### !!properties steps

!name steps

!type \[FunnelStepCompute]!



##### !!properties sessions

!name sessions

!type Int!



##### !!properties visitors

!name visitors

!type Int!



##### !!properties events

!name events

!type Int!

