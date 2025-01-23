---
title: FunnelComputeWriteInput
---
## !description

Input for writing funnel compute

## !!references FunnelComputeWriteInput

### !canonical input-FunnelComputeWriteInput

### !context

#### !graphqlName FunnelComputeWriteInput

#### !graphqlType input

### !examples

### !!definitions

#### !title Fields

#### !!properties type

!name type

!type String



#### !!properties date_range

!name date\_range

!type DateRangeInput!



##### !!properties from

!name from

!type RelativeDate



##### !!properties to

!name to

!type RelativeDate



#### !!properties steps

!name steps

!type \[FunnelStepInput]!



##### !!properties name

!name name

!type String



##### !!properties filters

!name filters

!type FiltersInput



###### !!properties must

!name must

!type \[FilterInput]



####### !!properties name

!name name

!type String!



####### !!properties unit

!name unit

!type String



####### !!properties group

!name group

!type String



####### !!properties data

!name data

!type FilterDataInput!



######## !!properties string

!name string

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties int

!name int

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties bool

!name bool

!type FilterDataBoolInput



######### !!properties value

!name value

!type Boolean!



######### !!properties operator

!name operator

!type String!



######## !!properties event

!name event

!type FilterDataEventInput



######### !!properties type

!name type

!type String!



######### !!properties group

!name group

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties element

!name element

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties txt

!name txt

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties element_path

!name element\_path

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties location

!name location

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties value

!name value

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties height

!name height

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties width

!name width

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties timestamp

!name timestamp

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties x

!name x

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties y

!name y

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######## !!properties param

!name param

!type FilterDataParamInput



######### !!properties name

!name name

!type String!



######### !!properties value

!name value

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



######### !!properties name

!name name

!type String!



######### !!properties value_str

!name value\_str

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties value_int

!name value\_int

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########## !!properties value

!name value

!type Boolean!



########## !!properties operator

!name operator

!type String!



######### !!properties value_float

!name value\_float

!type FilterDataFloatInput



########## !!properties values

!name values

!type \[Float]



########## !!properties value

!name value

!type Float



########## !!properties operator

!name operator

!type String!



####### !!properties defined_event_id

!name defined\_event\_id

!type String



####### !!properties stable_id

!name stable\_id

!type String



####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



###### !!properties should

!name should

!type \[FilterInput]



####### !!properties name

!name name

!type String!



####### !!properties unit

!name unit

!type String



####### !!properties group

!name group

!type String



####### !!properties data

!name data

!type FilterDataInput!



######## !!properties string

!name string

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties int

!name int

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties bool

!name bool

!type FilterDataBoolInput



######### !!properties value

!name value

!type Boolean!



######### !!properties operator

!name operator

!type String!



######## !!properties event

!name event

!type FilterDataEventInput



######### !!properties type

!name type

!type String!



######### !!properties group

!name group

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties element

!name element

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties txt

!name txt

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties element_path

!name element\_path

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties location

!name location

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties value

!name value

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties height

!name height

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties width

!name width

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties timestamp

!name timestamp

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties x

!name x

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties y

!name y

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######## !!properties param

!name param

!type FilterDataParamInput



######### !!properties name

!name name

!type String!



######### !!properties value

!name value

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



######### !!properties name

!name name

!type String!



######### !!properties value_str

!name value\_str

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties value_int

!name value\_int

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########## !!properties value

!name value

!type Boolean!



########## !!properties operator

!name operator

!type String!



######### !!properties value_float

!name value\_float

!type FilterDataFloatInput



########## !!properties values

!name values

!type \[Float]



########## !!properties value

!name value

!type Float



########## !!properties operator

!name operator

!type String!



####### !!properties defined_event_id

!name defined\_event\_id

!type String



####### !!properties stable_id

!name stable\_id

!type String



####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



###### !!properties must_not

!name must\_not

!type \[FilterInput]



####### !!properties name

!name name

!type String!



####### !!properties unit

!name unit

!type String



####### !!properties group

!name group

!type String



####### !!properties data

!name data

!type FilterDataInput!



######## !!properties string

!name string

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties int

!name int

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties bool

!name bool

!type FilterDataBoolInput



######### !!properties value

!name value

!type Boolean!



######### !!properties operator

!name operator

!type String!



######## !!properties event

!name event

!type FilterDataEventInput



######### !!properties type

!name type

!type String!



######### !!properties group

!name group

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties element

!name element

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties txt

!name txt

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties element_path

!name element\_path

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties location

!name location

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties value

!name value

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties height

!name height

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties width

!name width

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties timestamp

!name timestamp

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties x

!name x

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties y

!name y

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######## !!properties param

!name param

!type FilterDataParamInput



######### !!properties name

!name name

!type String!



######### !!properties value

!name value

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



######### !!properties name

!name name

!type String!



######### !!properties value_str

!name value\_str

!type FilterDataStringInput



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String!]



########## !!properties operator

!name operator

!type String!



######### !!properties value_int

!name value\_int

!type FilterDataIntInput



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int!]



########## !!properties operator

!name operator

!type String!



######### !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



########## !!properties value

!name value

!type Boolean!



########## !!properties operator

!name operator

!type String!



######### !!properties value_float

!name value\_float

!type FilterDataFloatInput



########## !!properties values

!name values

!type \[Float]



########## !!properties value

!name value

!type Float



########## !!properties operator

!name operator

!type String!



####### !!properties defined_event_id

!name defined\_event\_id

!type String



####### !!properties stable_id

!name stable\_id

!type String



####### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



#### !!properties filters

!name filters

!type FiltersInput



##### !!properties must

!name must

!type \[FilterInput]



###### !!properties name

!name name

!type String!



###### !!properties unit

!name unit

!type String



###### !!properties group

!name group

!type String



###### !!properties data

!name data

!type FilterDataInput!



####### !!properties string

!name string

!type FilterDataStringInput



######## !!properties value

!name value

!type String



######## !!properties values

!name values

!type \[String!]



######## !!properties operator

!name operator

!type String!



####### !!properties int

!name int

!type FilterDataIntInput



######## !!properties value

!name value

!type Int



######## !!properties values

!name values

!type \[Int!]



######## !!properties operator

!name operator

!type String!



####### !!properties bool

!name bool

!type FilterDataBoolInput



######## !!properties value

!name value

!type Boolean!



######## !!properties operator

!name operator

!type String!



####### !!properties event

!name event

!type FilterDataEventInput



######## !!properties type

!name type

!type String!



######## !!properties group

!name group

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties element

!name element

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties txt

!name txt

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties element_path

!name element\_path

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties location

!name location

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties value

!name value

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties height

!name height

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties width

!name width

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties timestamp

!name timestamp

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties x

!name x

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties y

!name y

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



####### !!properties param

!name param

!type FilterDataParamInput



######## !!properties name

!name name

!type String!



######## !!properties value

!name value

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



####### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



######## !!properties name

!name name

!type String!



######## !!properties value_str

!name value\_str

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties value_int

!name value\_int

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



######### !!properties value

!name value

!type Boolean!



######### !!properties operator

!name operator

!type String!



######## !!properties value_float

!name value\_float

!type FilterDataFloatInput



######### !!properties values

!name values

!type \[Float]



######### !!properties value

!name value

!type Float



######### !!properties operator

!name operator

!type String!



###### !!properties defined_event_id

!name defined\_event\_id

!type String



###### !!properties stable_id

!name stable\_id

!type String



###### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



##### !!properties should

!name should

!type \[FilterInput]



###### !!properties name

!name name

!type String!



###### !!properties unit

!name unit

!type String



###### !!properties group

!name group

!type String



###### !!properties data

!name data

!type FilterDataInput!



####### !!properties string

!name string

!type FilterDataStringInput



######## !!properties value

!name value

!type String



######## !!properties values

!name values

!type \[String!]



######## !!properties operator

!name operator

!type String!



####### !!properties int

!name int

!type FilterDataIntInput



######## !!properties value

!name value

!type Int



######## !!properties values

!name values

!type \[Int!]



######## !!properties operator

!name operator

!type String!



####### !!properties bool

!name bool

!type FilterDataBoolInput



######## !!properties value

!name value

!type Boolean!



######## !!properties operator

!name operator

!type String!



####### !!properties event

!name event

!type FilterDataEventInput



######## !!properties type

!name type

!type String!



######## !!properties group

!name group

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties element

!name element

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties txt

!name txt

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties element_path

!name element\_path

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties location

!name location

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties value

!name value

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties height

!name height

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties width

!name width

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties timestamp

!name timestamp

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties x

!name x

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties y

!name y

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



####### !!properties param

!name param

!type FilterDataParamInput



######## !!properties name

!name name

!type String!



######## !!properties value

!name value

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



####### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



######## !!properties name

!name name

!type String!



######## !!properties value_str

!name value\_str

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties value_int

!name value\_int

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



######### !!properties value

!name value

!type Boolean!



######### !!properties operator

!name operator

!type String!



######## !!properties value_float

!name value\_float

!type FilterDataFloatInput



######### !!properties values

!name values

!type \[Float]



######### !!properties value

!name value

!type Float



######### !!properties operator

!name operator

!type String!



###### !!properties defined_event_id

!name defined\_event\_id

!type String



###### !!properties stable_id

!name stable\_id

!type String



###### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



##### !!properties must_not

!name must\_not

!type \[FilterInput]



###### !!properties name

!name name

!type String!



###### !!properties unit

!name unit

!type String



###### !!properties group

!name group

!type String



###### !!properties data

!name data

!type FilterDataInput!



####### !!properties string

!name string

!type FilterDataStringInput



######## !!properties value

!name value

!type String



######## !!properties values

!name values

!type \[String!]



######## !!properties operator

!name operator

!type String!



####### !!properties int

!name int

!type FilterDataIntInput



######## !!properties value

!name value

!type Int



######## !!properties values

!name values

!type \[Int!]



######## !!properties operator

!name operator

!type String!



####### !!properties bool

!name bool

!type FilterDataBoolInput



######## !!properties value

!name value

!type Boolean!



######## !!properties operator

!name operator

!type String!



####### !!properties event

!name event

!type FilterDataEventInput



######## !!properties type

!name type

!type String!



######## !!properties group

!name group

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties element

!name element

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties txt

!name txt

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties element_path

!name element\_path

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties location

!name location

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties value

!name value

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties height

!name height

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties width

!name width

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties timestamp

!name timestamp

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties x

!name x

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties y

!name y

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



####### !!properties param

!name param

!type FilterDataParamInput



######## !!properties name

!name name

!type String!



######## !!properties value

!name value

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



####### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventPropertyInput]



######## !!properties name

!name name

!type String!



######## !!properties value_str

!name value\_str

!type FilterDataStringInput



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String!]



######### !!properties operator

!name operator

!type String!



######## !!properties value_int

!name value\_int

!type FilterDataIntInput



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int!]



######### !!properties operator

!name operator

!type String!



######## !!properties value_bool

!name value\_bool

!type FilterDataBoolInput



######### !!properties value

!name value

!type Boolean!



######### !!properties operator

!name operator

!type String!



######## !!properties value_float

!name value\_float

!type FilterDataFloatInput



######### !!properties values

!name values

!type \[Float]



######### !!properties value

!name value

!type Float



######### !!properties operator

!name operator

!type String!



###### !!properties defined_event_id

!name defined\_event\_id

!type String



###### !!properties stable_id

!name stable\_id

!type String



###### !!properties parent_filter_stable_id

!name parent\_filter\_stable\_id

!type String



#### !!properties conversion_value

!name conversion\_value

!type FunnelConversionValueInput



##### !!properties property_name

!name property\_name

!type String!



##### !!properties value_type

!name value\_type

!type String!



##### !!properties label

!name label

!type String!

