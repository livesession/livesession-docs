---
title: ComputeFunnel
---
## !description

Compute funnel object

## !!references ComputeFunnel

### !canonical object-ComputeFunnel

### !context

#### !graphqlName ComputeFunnel

#### !graphqlType object

### !examples

### !!definitions

#### !title Fields

#### !!properties date_range

!name date\_range

!type DateRange



##### !!properties from

!name from

!type RelativeDate



##### !!properties to

!name to

!type RelativeDate



#### !!properties steps

!name steps

!type \[FunnelStep]!



##### !!properties name

!name name

!type String



##### !!properties filters

!name filters

!type Filters



###### !!properties must

!name must

!type \[Filter]!



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

!type FilterData!



######## !!properties string

!name string

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties int

!name int

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties bool

!name bool

!type FilterDataBool



######### !!properties value

!name value

!type Boolean



######### !!properties operator

!name operator

!type String!



######## !!properties event

!name event

!type FilterDataEvent



######### !!properties type

!name type

!type String!



######### !!properties group

!name group

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element

!name element

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties txt

!name txt

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element_path

!name element\_path

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties location

!name location

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties height

!name height

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties width

!name width

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties timestamp

!name timestamp

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties x

!name x

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties y

!name y

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######## !!properties param

!name param

!type FilterDataParam



######### !!properties name

!name name

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######### !!properties name

!name name

!type String!



######### !!properties value_str

!name value\_str

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value_bool

!name value\_bool

!type FilterDataBool



########## !!properties value

!name value

!type Boolean



########## !!properties operator

!name operator

!type String!



######### !!properties value_int

!name value\_int

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties value_float

!name value\_float

!type FilterDataFloat



########## !!properties value

!name value

!type Float!



########## !!properties values

!name values

!type \[Float!]



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

!type \[Filter]!



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

!type FilterData!



######## !!properties string

!name string

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties int

!name int

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties bool

!name bool

!type FilterDataBool



######### !!properties value

!name value

!type Boolean



######### !!properties operator

!name operator

!type String!



######## !!properties event

!name event

!type FilterDataEvent



######### !!properties type

!name type

!type String!



######### !!properties group

!name group

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element

!name element

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties txt

!name txt

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element_path

!name element\_path

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties location

!name location

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties height

!name height

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties width

!name width

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties timestamp

!name timestamp

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties x

!name x

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties y

!name y

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######## !!properties param

!name param

!type FilterDataParam



######### !!properties name

!name name

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######### !!properties name

!name name

!type String!



######### !!properties value_str

!name value\_str

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value_bool

!name value\_bool

!type FilterDataBool



########## !!properties value

!name value

!type Boolean



########## !!properties operator

!name operator

!type String!



######### !!properties value_int

!name value\_int

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties value_float

!name value\_float

!type FilterDataFloat



########## !!properties value

!name value

!type Float!



########## !!properties values

!name values

!type \[Float!]



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

!type \[Filter]!



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

!type FilterData!



######## !!properties string

!name string

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties int

!name int

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties bool

!name bool

!type FilterDataBool



######### !!properties value

!name value

!type Boolean



######### !!properties operator

!name operator

!type String!



######## !!properties event

!name event

!type FilterDataEvent



######### !!properties type

!name type

!type String!



######### !!properties group

!name group

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element

!name element

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties txt

!name txt

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties element_path

!name element\_path

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties location

!name location

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties height

!name height

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties width

!name width

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties timestamp

!name timestamp

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties x

!name x

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties y

!name y

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######## !!properties param

!name param

!type FilterDataParam



######### !!properties name

!name name

!type String!



######### !!properties value

!name value

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######## !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######### !!properties name

!name name

!type String!



######### !!properties value_str

!name value\_str

!type FilterDataString



########## !!properties value

!name value

!type String



########## !!properties values

!name values

!type \[String]



########## !!properties operator

!name operator

!type String!



######### !!properties value_bool

!name value\_bool

!type FilterDataBool



########## !!properties value

!name value

!type Boolean



########## !!properties operator

!name operator

!type String!



######### !!properties value_int

!name value\_int

!type FilterDataInt



########## !!properties value

!name value

!type Int



########## !!properties values

!name values

!type \[Int]



########## !!properties operator

!name operator

!type String!



######### !!properties value_float

!name value\_float

!type FilterDataFloat



########## !!properties value

!name value

!type Float!



########## !!properties values

!name values

!type \[Float!]



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



#### !!properties conversion_value

!name conversion\_value

!type FunnelConversionValue



##### !!properties property_name

!name property\_name

!type String!



##### !!properties value_type

!name value\_type

!type String!



##### !!properties label

!name label

!type String!



#### !!properties type

!name type

!type String



#### !!properties filters

!name filters

!type Filters



##### !!properties must

!name must

!type \[Filter]!



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

!type FilterData!



####### !!properties string

!name string

!type FilterDataString



######## !!properties value

!name value

!type String



######## !!properties values

!name values

!type \[String]



######## !!properties operator

!name operator

!type String!



####### !!properties int

!name int

!type FilterDataInt



######## !!properties value

!name value

!type Int



######## !!properties values

!name values

!type \[Int]



######## !!properties operator

!name operator

!type String!



####### !!properties bool

!name bool

!type FilterDataBool



######## !!properties value

!name value

!type Boolean



######## !!properties operator

!name operator

!type String!



####### !!properties event

!name event

!type FilterDataEvent



######## !!properties type

!name type

!type String!



######## !!properties group

!name group

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties element

!name element

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties txt

!name txt

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties element_path

!name element\_path

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties location

!name location

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties value

!name value

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties height

!name height

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties width

!name width

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties timestamp

!name timestamp

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties x

!name x

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties y

!name y

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



####### !!properties param

!name param

!type FilterDataParam



######## !!properties name

!name name

!type String!



######## !!properties value

!name value

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



####### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######## !!properties name

!name name

!type String!



######## !!properties value_str

!name value\_str

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties value_bool

!name value\_bool

!type FilterDataBool



######### !!properties value

!name value

!type Boolean



######### !!properties operator

!name operator

!type String!



######## !!properties value_int

!name value\_int

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties value_float

!name value\_float

!type FilterDataFloat



######### !!properties value

!name value

!type Float!



######### !!properties values

!name values

!type \[Float!]



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

!type \[Filter]!



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

!type FilterData!



####### !!properties string

!name string

!type FilterDataString



######## !!properties value

!name value

!type String



######## !!properties values

!name values

!type \[String]



######## !!properties operator

!name operator

!type String!



####### !!properties int

!name int

!type FilterDataInt



######## !!properties value

!name value

!type Int



######## !!properties values

!name values

!type \[Int]



######## !!properties operator

!name operator

!type String!



####### !!properties bool

!name bool

!type FilterDataBool



######## !!properties value

!name value

!type Boolean



######## !!properties operator

!name operator

!type String!



####### !!properties event

!name event

!type FilterDataEvent



######## !!properties type

!name type

!type String!



######## !!properties group

!name group

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties element

!name element

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties txt

!name txt

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties element_path

!name element\_path

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties location

!name location

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties value

!name value

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties height

!name height

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties width

!name width

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties timestamp

!name timestamp

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties x

!name x

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties y

!name y

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



####### !!properties param

!name param

!type FilterDataParam



######## !!properties name

!name name

!type String!



######## !!properties value

!name value

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



####### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######## !!properties name

!name name

!type String!



######## !!properties value_str

!name value\_str

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties value_bool

!name value\_bool

!type FilterDataBool



######### !!properties value

!name value

!type Boolean



######### !!properties operator

!name operator

!type String!



######## !!properties value_int

!name value\_int

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties value_float

!name value\_float

!type FilterDataFloat



######### !!properties value

!name value

!type Float!



######### !!properties values

!name values

!type \[Float!]



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

!type \[Filter]!



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

!type FilterData!



####### !!properties string

!name string

!type FilterDataString



######## !!properties value

!name value

!type String



######## !!properties values

!name values

!type \[String]



######## !!properties operator

!name operator

!type String!



####### !!properties int

!name int

!type FilterDataInt



######## !!properties value

!name value

!type Int



######## !!properties values

!name values

!type \[Int]



######## !!properties operator

!name operator

!type String!



####### !!properties bool

!name bool

!type FilterDataBool



######## !!properties value

!name value

!type Boolean



######## !!properties operator

!name operator

!type String!



####### !!properties event

!name event

!type FilterDataEvent



######## !!properties type

!name type

!type String!



######## !!properties group

!name group

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties element

!name element

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties txt

!name txt

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties element_path

!name element\_path

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties location

!name location

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties value

!name value

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties height

!name height

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties width

!name width

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties timestamp

!name timestamp

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties x

!name x

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties y

!name y

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



####### !!properties param

!name param

!type FilterDataParam



######## !!properties name

!name name

!type String!



######## !!properties value

!name value

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



####### !!properties event_properties

!name event\_properties

!type \[FilterDataCustomEventProperty]



######## !!properties name

!name name

!type String!



######## !!properties value_str

!name value\_str

!type FilterDataString



######### !!properties value

!name value

!type String



######### !!properties values

!name values

!type \[String]



######### !!properties operator

!name operator

!type String!



######## !!properties value_bool

!name value\_bool

!type FilterDataBool



######### !!properties value

!name value

!type Boolean



######### !!properties operator

!name operator

!type String!



######## !!properties value_int

!name value\_int

!type FilterDataInt



######### !!properties value

!name value

!type Int



######### !!properties values

!name values

!type \[Int]



######### !!properties operator

!name operator

!type String!



######## !!properties value_float

!name value\_float

!type FilterDataFloat



######### !!properties value

!name value

!type Float!



######### !!properties values

!name values

!type \[Float!]



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

