---
title: FunnelComputeResponse
---
## !!references FunnelComputeResponse

### !description

Response for funnel compute

### !canonical object-FunnelComputeResponse

### !context

#### !graphqlName FunnelComputeResponse

#### !graphqlTypeShort object

### !examples

### !!definitions

#### !title Fields

#### !!properties cached_response

!name cached\_response

!type CachedResponse!



##### !context

###### !graphqlBuiltInType false

###### !graphqlName cached_response

###### !graphqlTypeFlat CachedResponse

###### !graphqlTypeShort object

##### !!properties ttl

!name ttl

!type String!



###### !context

####### !graphqlBuiltInType true

####### !graphqlName ttl

####### !graphqlTypeFlat String

####### !graphqlTypeShort scalar

##### !!properties id

!name id

!type String!



###### !context

####### !graphqlBuiltInType true

####### !graphqlName id

####### !graphqlTypeFlat String

####### !graphqlTypeShort scalar

##### !!properties computed_at

!name computed\_at

!type UnixTimestamp!



###### !context

####### !graphqlBuiltInType false

####### !graphqlName computed_at

####### !graphqlTypeFlat UnixTimestamp

####### !graphqlTypeShort scalar

##### !!properties fresh

!name fresh

!type Boolean!



###### !context

####### !graphqlBuiltInType true

####### !graphqlName fresh

####### !graphqlTypeFlat Boolean

####### !graphqlTypeShort scalar

#### !!properties total_sessions

!name total\_sessions

!type Int!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName total_sessions

###### !graphqlTypeFlat Int

###### !graphqlTypeShort scalar

#### !!properties total_visitors

!name total\_visitors

!type Int!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName total_visitors

###### !graphqlTypeFlat Int

###### !graphqlTypeShort scalar

#### !!properties total_events

!name total\_events

!type Int!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName total_events

###### !graphqlTypeFlat Int

###### !graphqlTypeShort scalar

#### !!properties conversion_value

!name conversion\_value

!type FunnelConversionValueResponse



##### !context

###### !graphqlBuiltInType false

###### !graphqlName conversion_value

###### !graphqlTypeFlat FunnelConversionValueResponse

###### !graphqlTypeShort object

##### !!properties value

!name value

!type Float!



###### !context

####### !graphqlBuiltInType true

####### !graphqlName value

####### !graphqlTypeFlat Float

####### !graphqlTypeShort scalar

##### !!properties label

!name label

!type String!



###### !context

####### !graphqlBuiltInType true

####### !graphqlName label

####### !graphqlTypeFlat String

####### !graphqlTypeShort scalar

#### !!properties steps

!name steps

!type \[FunnelStepCompute]!



##### !context

###### !graphqlBuiltInType false

###### !graphqlName steps

###### !graphqlTypeFlat FunnelStepCompute

###### !graphqlTypeShort object

##### !!properties sessions

!name sessions

!type Int!



###### !context

####### !graphqlBuiltInType true

####### !graphqlName sessions

####### !graphqlTypeFlat Int

####### !graphqlTypeShort scalar

##### !!properties visitors

!name visitors

!type Int!



###### !context

####### !graphqlBuiltInType true

####### !graphqlName visitors

####### !graphqlTypeFlat Int

####### !graphqlTypeShort scalar

##### !!properties events

!name events

!type Int!



###### !context

####### !graphqlBuiltInType true

####### !graphqlName events

####### !graphqlTypeFlat Int

####### !graphqlTypeShort scalar
