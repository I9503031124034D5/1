import
{
Slot
}
from
'expo-router'
var
SLOT
=
Slot
import 
{
createElement
}
from
'react'
var
ELEMENT
=
createElement
import
{
StatusBar
,
View
}
from 
'react-native'
var
BARSTATUSMARGINTOP
=
32
,
VIEW
=
View
export 
default
(
) => 
{
return ELEMENT
(
VIEW
,
{
style
:
{
width
:
'100%'
}
}
,
[
ELEMENT
(
VIEW
,
{
style
:
{
marginTop
:
BARSTATUSMARGINTOP
,
width
:
'100%'
,
backgroundColor: 'RGBA(199, 0, 0, 1)'
}
}
)
,
ELEMENT
(
VIEW
,
{
style
:
{
width
:
'100%'
}
}
,
ELEMENT
(
SLOT
)
)
]
)
}
