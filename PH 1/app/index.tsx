var
S
=
`
£INDEX
DATA BASE TABLE 1
: PK1
£INDEX METH
S1()
£PH
DATA BASE TABLE 2
: PK2, F1, F2, F3
£PH
DATA BASE TABLE 3
: PK3, BL, F1
£PH METH
I1(PK1, K, V)
I2(PK3, PK2, BL)
S1(PK1, K)
S2(PK3, )
U1(PK1, K, V)
U2()
`
import
{
_19
,
_12
,
_8
,
_6
,
DU
,
_14
,
_13
,
_17
,
_15
,
_1
,
_28
,
_29
,
_30
,
_31
,
_32
,
_33
,
_34
,
_35
,
PE
,
_23
,
_16
,
_20
,
_22,
_10
}
from
'i9503031124034-1'
export default
(
) =>
{
var
__1
=
_16
(
[
]
)
_14
(
(
) =>
{
R1
(
__1
)
}
,
[
]
)
return _13
(
_22
,
{
}
,
[
_13
(
_22
,
{
key
:
1
,
style
:
{
backgroundColor
:
'rgb(251, 251, 251)'
}
}
,
[
_13
(
_19
,
{
key
:
1
,
onPress
:
(
) =>
{
R2
(
__1
)
}
}
,
_13
(
_28
)
)
]
)
,
_13
(
_22
,
{
key
:
2
,
style
:
{
}
}
,
_13
(
P1
,
{
__R1
:
__1
[
0
]
}
)
)
]
)
}
// PROP(OBJECT) IS NOT MUTABLE
// PROPS(ANY) IS MUTABLE
var
P1
=
_15
(
(
{
__R1
}
) =>
{
return _13
(
_23
,
{
__R1
:
__R1
,
__R2
:
(
____P1
,
____P2
) =>
_13
(
_20
,
{
key
:
____P2
}
,
____P1
.
PK
)
}
)
}
)
var
R1
=
(
__P
) =>
{
__P
[
1
]
(
_10
(
/* CHANCE */
`SELECT * FROM __T1`
)
)
}
,
R2
=
(
__P
) =>
{
_8
(
`INSERT INTO __T1 DEFAULT VALUES`
)
R1
(
__P
)
}