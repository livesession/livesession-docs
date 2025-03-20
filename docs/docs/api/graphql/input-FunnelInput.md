---
title: FunnelInput
---
## !!references FunnelInput

### !description

Input for funnel

### !canonical input-FunnelInput

### !context

#### !graphqlName FunnelInput

#### !graphqlTypeShort input

### !examples

### !!definitions

#### !title Fields

#### !!properties name

!name name

!type String!

Name of the funnel

##### !context

###### !graphqlBuiltInType true

###### !graphqlName name

###### !graphqlTypeFlat String

###### !graphqlTypeShort scalar

#### !!properties description

!name description

!type String



##### !context

###### !graphqlBuiltInType true

###### !graphqlName description

###### !graphqlTypeFlat String

###### !graphqlTypeShort scalar

#### !!properties website_id

!name website\_id

!type ID



##### !context

###### !graphqlBuiltInType true

###### !graphqlName website_id

###### !graphqlTypeFlat ID

###### !graphqlTypeShort scalar

#### !!properties segment_id

!name segment\_id

!type String!



##### !context

###### !graphqlBuiltInType true

###### !graphqlName segment_id

###### !graphqlTypeFlat String

###### !graphqlTypeShort scalar

#### !!properties compute

!name compute

!type FunnelComputeWriteInput!



##### !context

###### !graphqlBuiltInType false

###### !graphqlName compute

###### !graphqlTypeFlat FunnelComputeWriteInput

###### !graphqlTypeShort input

##### !!properties type

!name type

!type String



###### !context

####### !graphqlBuiltInType true

####### !graphqlName type

####### !graphqlTypeFlat String

####### !graphqlTypeShort scalar

##### !!properties date_range

!name date\_range

!type DateRangeInput!



###### !context

####### !graphqlBuiltInType false

####### !graphqlName date_range

####### !graphqlTypeFlat DateRangeInput

####### !graphqlTypeShort input

###### !!properties from

!name from

!type RelativeDate



####### !context

######## !graphqlBuiltInType false

######## !graphqlName from

######## !graphqlTypeFlat RelativeDate

######## !graphqlTypeShort scalar

###### !!properties to

!name to

!type RelativeDate



####### !context

######## !graphqlBuiltInType false

######## !graphqlName to

######## !graphqlTypeFlat RelativeDate

######## !graphqlTypeShort scalar

##### !!properties steps

!name steps

!type \[FunnelStepInput]!



###### !context

####### !graphqlBuiltInType false

####### !graphqlName steps

####### !graphqlTypeFlat FunnelStepInput

####### !graphqlTypeShort input

###### !!properties name

!name name

!type String



####### !context

######## !graphqlBuiltInType true

######## !graphqlName name

######## !graphqlTypeFlat String

######## !graphqlTypeShort scalar

###### !!properties filters

!name filters

!type FiltersInput



####### !context

######## !graphqlBuiltInType false

######## !graphqlName filters

######## !graphqlTypeFlat FiltersInput

######## !graphqlTypeShort input

####### !!properties must

!name must

!type \[FilterInput]



######## !context

######### !graphqlBuiltInType false

######### !graphqlName must

######### !graphqlTypeFlat FilterInput

######### !graphqlTypeShort input

######## !!properties name

!name name

!type String!



######### !context

########## !graphqlBuiltInType true

########## !graphqlName name

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties unit

!name unit

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName unit

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties group

!name group

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName group

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties data

!name data

!type FilterDataInput!



######### !context

########## !graphqlBuiltInType false

########## !graphqlName data

########## !graphqlTypeFlat FilterDataInput

########## !graphqlTypeShort input

######### !!properties string

!name string

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName string

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties int

!name int

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName int

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties bool

!name bool

!type FilterDataBoolInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName bool

########### !graphqlTypeFlat FilterDataBoolInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Boolean!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties event

!name event

!type FilterDataEventInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event

########### !graphqlTypeFlat FilterDataEventInput

########### !graphqlTypeShort input

########## !!properties type

!name type

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName type

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties group

!name group

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName group

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element

!name element

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties txt

!name txt

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName txt

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element_path

!name element\_path

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element_path

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties location

!name location

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName location

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties height

!name height

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName height

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties width

!name width

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName width

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties timestamp

!name timestamp

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName timestamp

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties x

!name x

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName x

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties y

!name y

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName y

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties param

!name param

!type FilterDataParamInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName param

########### !graphqlTypeFlat FilterDataParamInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event_properties

########### !graphqlTypeFlat FilterDataCustomEventPropertyInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value_str

!name value\_str

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_str

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_int

!name value\_int

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_int

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_bool

############ !graphqlTypeFlat FilterDataBoolInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Boolean!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_float

!name value\_float

!type FilterDataFloatInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_float

############ !graphqlTypeFlat FilterDataFloatInput

############ !graphqlTypeShort input

########### !!properties values

!name values

!type \[Float]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties value

!name value

!type Float



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######## !!properties defined_event_id

!name defined\_event\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName defined_event_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties stable_id

!name stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName parent_filter_stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

####### !!properties should

!name should

!type \[FilterInput]



######## !context

######### !graphqlBuiltInType false

######### !graphqlName should

######### !graphqlTypeFlat FilterInput

######### !graphqlTypeShort input

######## !!properties name

!name name

!type String!



######### !context

########## !graphqlBuiltInType true

########## !graphqlName name

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties unit

!name unit

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName unit

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties group

!name group

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName group

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties data

!name data

!type FilterDataInput!



######### !context

########## !graphqlBuiltInType false

########## !graphqlName data

########## !graphqlTypeFlat FilterDataInput

########## !graphqlTypeShort input

######### !!properties string

!name string

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName string

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties int

!name int

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName int

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties bool

!name bool

!type FilterDataBoolInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName bool

########### !graphqlTypeFlat FilterDataBoolInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Boolean!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties event

!name event

!type FilterDataEventInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event

########### !graphqlTypeFlat FilterDataEventInput

########### !graphqlTypeShort input

########## !!properties type

!name type

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName type

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties group

!name group

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName group

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element

!name element

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties txt

!name txt

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName txt

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element_path

!name element\_path

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element_path

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties location

!name location

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName location

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties height

!name height

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName height

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties width

!name width

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName width

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties timestamp

!name timestamp

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName timestamp

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties x

!name x

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName x

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties y

!name y

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName y

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties param

!name param

!type FilterDataParamInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName param

########### !graphqlTypeFlat FilterDataParamInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event_properties

########### !graphqlTypeFlat FilterDataCustomEventPropertyInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value_str

!name value\_str

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_str

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_int

!name value\_int

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_int

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_bool

############ !graphqlTypeFlat FilterDataBoolInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Boolean!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_float

!name value\_float

!type FilterDataFloatInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_float

############ !graphqlTypeFlat FilterDataFloatInput

############ !graphqlTypeShort input

########### !!properties values

!name values

!type \[Float]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties value

!name value

!type Float



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######## !!properties defined_event_id

!name defined\_event\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName defined_event_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties stable_id

!name stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName parent_filter_stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

####### !!properties must_not

!name must\_not

!type \[FilterInput]



######## !context

######### !graphqlBuiltInType false

######### !graphqlName must_not

######### !graphqlTypeFlat FilterInput

######### !graphqlTypeShort input

######## !!properties name

!name name

!type String!



######### !context

########## !graphqlBuiltInType true

########## !graphqlName name

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties unit

!name unit

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName unit

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties group

!name group

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName group

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties data

!name data

!type FilterDataInput!



######### !context

########## !graphqlBuiltInType false

########## !graphqlName data

########## !graphqlTypeFlat FilterDataInput

########## !graphqlTypeShort input

######### !!properties string

!name string

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName string

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties int

!name int

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName int

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties bool

!name bool

!type FilterDataBoolInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName bool

########### !graphqlTypeFlat FilterDataBoolInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Boolean!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties event

!name event

!type FilterDataEventInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event

########### !graphqlTypeFlat FilterDataEventInput

########### !graphqlTypeShort input

########## !!properties type

!name type

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName type

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties group

!name group

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName group

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element

!name element

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties txt

!name txt

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName txt

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties element_path

!name element\_path

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName element_path

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties location

!name location

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName location

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties height

!name height

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName height

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties width

!name width

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName width

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties timestamp

!name timestamp

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName timestamp

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties x

!name x

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName x

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties y

!name y

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName y

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties param

!name param

!type FilterDataParamInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName param

########### !graphqlTypeFlat FilterDataParamInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



########## !context

########### !graphqlBuiltInType false

########### !graphqlName event_properties

########### !graphqlTypeFlat FilterDataCustomEventPropertyInput

########### !graphqlTypeShort input

########## !!properties name

!name name

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName name

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties value_str

!name value\_str

!type FilterDataStringInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_str

############ !graphqlTypeFlat FilterDataStringInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type String



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[String!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_int

!name value\_int

!type FilterDataIntInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_int

############ !graphqlTypeFlat FilterDataIntInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Int



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties values

!name values

!type \[Int!]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Int

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_bool

############ !graphqlTypeFlat FilterDataBoolInput

############ !graphqlTypeShort input

########### !!properties value

!name value

!type Boolean!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Boolean

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

########## !!properties value_float

!name value\_float

!type FilterDataFloatInput



########### !context

############ !graphqlBuiltInType false

############ !graphqlName value_float

############ !graphqlTypeFlat FilterDataFloatInput

############ !graphqlTypeShort input

########### !!properties values

!name values

!type \[Float]



############ !context

############# !graphqlBuiltInType true

############# !graphqlName values

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties value

!name value

!type Float



############ !context

############# !graphqlBuiltInType true

############# !graphqlName value

############# !graphqlTypeFlat Float

############# !graphqlTypeShort scalar

########### !!properties operator

!name operator

!type String!



############ !context

############# !graphqlBuiltInType true

############# !graphqlName operator

############# !graphqlTypeFlat String

############# !graphqlTypeShort scalar

######## !!properties defined_event_id

!name defined\_event\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName defined_event_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties stable_id

!name stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

######## !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######### !context

########## !graphqlBuiltInType true

########## !graphqlName parent_filter_stable_id

########## !graphqlTypeFlat String

########## !graphqlTypeShort scalar

##### !!properties filters

!name filters

!type FiltersInput



###### !context

####### !graphqlBuiltInType false

####### !graphqlName filters

####### !graphqlTypeFlat FiltersInput

####### !graphqlTypeShort input

###### !!properties must

!name must

!type \[FilterInput]



####### !context

######## !graphqlBuiltInType false

######## !graphqlName must

######## !graphqlTypeFlat FilterInput

######## !graphqlTypeShort input

####### !!properties name

!name name

!type String!



######## !context

######### !graphqlBuiltInType true

######### !graphqlName name

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties unit

!name unit

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName unit

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties group

!name group

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName group

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties data

!name data

!type FilterDataInput!



######## !context

######### !graphqlBuiltInType false

######### !graphqlName data

######### !graphqlTypeFlat FilterDataInput

######### !graphqlTypeShort input

######## !!properties string

!name string

!type FilterDataStringInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName string

########## !graphqlTypeFlat FilterDataStringInput

########## !graphqlTypeShort input

######### !!properties value

!name value

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[String!]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties int

!name int

!type FilterDataIntInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName int

########## !graphqlTypeFlat FilterDataIntInput

########## !graphqlTypeShort input

######### !!properties value

!name value

!type Int



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[Int!]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties bool

!name bool

!type FilterDataBoolInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName bool

########## !graphqlTypeFlat FilterDataBoolInput

########## !graphqlTypeShort input

######### !!properties value

!name value

!type Boolean!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Boolean

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties event

!name event

!type FilterDataEventInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event

########## !graphqlTypeFlat FilterDataEventInput

########## !graphqlTypeShort input

######### !!properties type

!name type

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName type

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties group

!name group

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName group

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element

!name element

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties txt

!name txt

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName txt

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element_path

!name element\_path

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element_path

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties location

!name location

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName location

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties height

!name height

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName height

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties width

!name width

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName width

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties timestamp

!name timestamp

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName timestamp

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties x

!name x

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName x

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties y

!name y

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName y

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties param

!name param

!type FilterDataParamInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName param

########## !graphqlTypeFlat FilterDataParamInput

########## !graphqlTypeShort input

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event_properties

########## !graphqlTypeFlat FilterDataCustomEventPropertyInput

########## !graphqlTypeShort input

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value_str

!name value\_str

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_str

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_int

!name value\_int

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_int

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_bool

########### !graphqlTypeFlat FilterDataBoolInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Boolean!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_float

!name value\_float

!type FilterDataFloatInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_float

########### !graphqlTypeFlat FilterDataFloatInput

########### !graphqlTypeShort input

########## !!properties values

!name values

!type \[Float]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type Float



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

####### !!properties defined_event_id

!name defined\_event\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName defined_event_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties stable_id

!name stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName parent_filter_stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

###### !!properties should

!name should

!type \[FilterInput]



####### !context

######## !graphqlBuiltInType false

######## !graphqlName should

######## !graphqlTypeFlat FilterInput

######## !graphqlTypeShort input

####### !!properties name

!name name

!type String!



######## !context

######### !graphqlBuiltInType true

######### !graphqlName name

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties unit

!name unit

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName unit

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties group

!name group

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName group

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties data

!name data

!type FilterDataInput!



######## !context

######### !graphqlBuiltInType false

######### !graphqlName data

######### !graphqlTypeFlat FilterDataInput

######### !graphqlTypeShort input

######## !!properties string

!name string

!type FilterDataStringInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName string

########## !graphqlTypeFlat FilterDataStringInput

########## !graphqlTypeShort input

######### !!properties value

!name value

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[String!]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties int

!name int

!type FilterDataIntInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName int

########## !graphqlTypeFlat FilterDataIntInput

########## !graphqlTypeShort input

######### !!properties value

!name value

!type Int



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[Int!]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties bool

!name bool

!type FilterDataBoolInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName bool

########## !graphqlTypeFlat FilterDataBoolInput

########## !graphqlTypeShort input

######### !!properties value

!name value

!type Boolean!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Boolean

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties event

!name event

!type FilterDataEventInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event

########## !graphqlTypeFlat FilterDataEventInput

########## !graphqlTypeShort input

######### !!properties type

!name type

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName type

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties group

!name group

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName group

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element

!name element

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties txt

!name txt

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName txt

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element_path

!name element\_path

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element_path

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties location

!name location

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName location

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties height

!name height

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName height

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties width

!name width

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName width

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties timestamp

!name timestamp

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName timestamp

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties x

!name x

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName x

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties y

!name y

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName y

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties param

!name param

!type FilterDataParamInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName param

########## !graphqlTypeFlat FilterDataParamInput

########## !graphqlTypeShort input

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event_properties

########## !graphqlTypeFlat FilterDataCustomEventPropertyInput

########## !graphqlTypeShort input

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value_str

!name value\_str

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_str

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_int

!name value\_int

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_int

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_bool

########### !graphqlTypeFlat FilterDataBoolInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Boolean!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_float

!name value\_float

!type FilterDataFloatInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_float

########### !graphqlTypeFlat FilterDataFloatInput

########### !graphqlTypeShort input

########## !!properties values

!name values

!type \[Float]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type Float



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

####### !!properties defined_event_id

!name defined\_event\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName defined_event_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties stable_id

!name stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName parent_filter_stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

###### !!properties must_not

!name must\_not

!type \[FilterInput]



####### !context

######## !graphqlBuiltInType false

######## !graphqlName must_not

######## !graphqlTypeFlat FilterInput

######## !graphqlTypeShort input

####### !!properties name

!name name

!type String!



######## !context

######### !graphqlBuiltInType true

######### !graphqlName name

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties unit

!name unit

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName unit

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties group

!name group

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName group

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties data

!name data

!type FilterDataInput!



######## !context

######### !graphqlBuiltInType false

######### !graphqlName data

######### !graphqlTypeFlat FilterDataInput

######### !graphqlTypeShort input

######## !!properties string

!name string

!type FilterDataStringInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName string

########## !graphqlTypeFlat FilterDataStringInput

########## !graphqlTypeShort input

######### !!properties value

!name value

!type String



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[String!]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties int

!name int

!type FilterDataIntInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName int

########## !graphqlTypeFlat FilterDataIntInput

########## !graphqlTypeShort input

######### !!properties value

!name value

!type Int



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties values

!name values

!type \[Int!]



########## !context

########### !graphqlBuiltInType true

########### !graphqlName values

########### !graphqlTypeFlat Int

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties bool

!name bool

!type FilterDataBoolInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName bool

########## !graphqlTypeFlat FilterDataBoolInput

########## !graphqlTypeShort input

######### !!properties value

!name value

!type Boolean!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName value

########### !graphqlTypeFlat Boolean

########### !graphqlTypeShort scalar

######### !!properties operator

!name operator

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName operator

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######## !!properties event

!name event

!type FilterDataEventInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event

########## !graphqlTypeFlat FilterDataEventInput

########## !graphqlTypeShort input

######### !!properties type

!name type

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName type

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties group

!name group

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName group

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element

!name element

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties txt

!name txt

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName txt

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties element_path

!name element\_path

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName element_path

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties location

!name location

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName location

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties height

!name height

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName height

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties width

!name width

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName width

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties timestamp

!name timestamp

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName timestamp

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties x

!name x

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName x

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties y

!name y

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName y

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties param

!name param

!type FilterDataParamInput



######### !context

########## !graphqlBuiltInType false

########## !graphqlName param

########## !graphqlTypeFlat FilterDataParamInput

########## !graphqlTypeShort input

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value

!name value

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



######### !context

########## !graphqlBuiltInType false

########## !graphqlName event_properties

########## !graphqlTypeFlat FilterDataCustomEventPropertyInput

########## !graphqlTypeShort input

######### !!properties name

!name name

!type String!



########## !context

########### !graphqlBuiltInType true

########### !graphqlName name

########### !graphqlTypeFlat String

########### !graphqlTypeShort scalar

######### !!properties value_str

!name value\_str

!type FilterDataStringInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_str

########### !graphqlTypeFlat FilterDataStringInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type String



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[String!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_int

!name value\_int

!type FilterDataIntInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_int

########### !graphqlTypeFlat FilterDataIntInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Int



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties values

!name values

!type \[Int!]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Int

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_bool

########### !graphqlTypeFlat FilterDataBoolInput

########### !graphqlTypeShort input

########## !!properties value

!name value

!type Boolean!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Boolean

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

######### !!properties value_float

!name value\_float

!type FilterDataFloatInput



########## !context

########### !graphqlBuiltInType false

########### !graphqlName value_float

########### !graphqlTypeFlat FilterDataFloatInput

########### !graphqlTypeShort input

########## !!properties values

!name values

!type \[Float]



########### !context

############ !graphqlBuiltInType true

############ !graphqlName values

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties value

!name value

!type Float



########### !context

############ !graphqlBuiltInType true

############ !graphqlName value

############ !graphqlTypeFlat Float

############ !graphqlTypeShort scalar

########## !!properties operator

!name operator

!type String!



########### !context

############ !graphqlBuiltInType true

############ !graphqlName operator

############ !graphqlTypeFlat String

############ !graphqlTypeShort scalar

####### !!properties defined_event_id

!name defined\_event\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName defined_event_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties stable_id

!name stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



######## !context

######### !graphqlBuiltInType true

######### !graphqlName parent_filter_stable_id

######### !graphqlTypeFlat String

######### !graphqlTypeShort scalar

##### !!properties conversion_value

!name conversion\_value

!type FunnelConversionValueInput



###### !context

####### !graphqlBuiltInType false

####### !graphqlName conversion_value

####### !graphqlTypeFlat FunnelConversionValueInput

####### !graphqlTypeShort input

###### !!properties property_name

!name property\_name

!type String!



####### !context

######## !graphqlBuiltInType true

######## !graphqlName property_name

######## !graphqlTypeFlat String

######## !graphqlTypeShort scalar

###### !!properties value_type

!name value\_type

!type String!



####### !context

######## !graphqlBuiltInType true

######## !graphqlName value_type

######## !graphqlTypeFlat String

######## !graphqlTypeShort scalar

###### !!properties label

!name label

!type String!



####### !context

######## !graphqlBuiltInType true

######## !graphqlName label

######## !graphqlTypeFlat String

######## !graphqlTypeShort scalar

#### !!properties is_public

!name is\_public

!type Boolean



##### !context

###### !graphqlBuiltInType true

###### !graphqlName is_public

###### !graphqlTypeFlat Boolean

###### !graphqlTypeShort scalar
