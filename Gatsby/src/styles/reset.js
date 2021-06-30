import { createGlobalStyle } from "styled-components";
const reset = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
  color:#5D5D5D;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
html,body{
  height:100%;
  
}
h1
{
font-family: 'Fjalla One', sans-serif;
font-size: 36px;
font-weight: 700;
line-height: 46px;
text-align: center;
color:white;
text-transform: uppercase;
font-weight: bold;
  @media (min-width: 600px) {
  font-size: 32px;
  }
  @media (min-width: 1000px) {
font-size: 64px;
font-style: normal;
line-height: 60px;
text-align: left;

  }

}
h2{
font-family: 'Fjalla One', sans-serif;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: 43px;
letter-spacing: 0em;
text-align: center;
color:#FACF03;
  @media (min-width: 600px) {
  font-size: 32px;
  }
 @media (min-width: 1000px) {
  font-size: 48px;
  }
}
h3{
font-family: 'Fjalla One', sans-serif;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 29px;
letter-spacing: 0em;
text-align: left;
color: #000000;
  @media (min-width: 600px) {
  font-size: 18px;
  }
}
p{
font-family: 'Fjalla One', sans-serif;
font-size: 16px;
color:white;
font-style: normal;
font-weight: 300;
line-height: 19px;
letter-spacing: 0em;
text-align: center;
  @media (min-width: 600px) {
  font-size: 18px;
  }
    @media (min-width: 1000px) {
font-family: Helvetica Neue LT Std;
font-size: 24px;
line-height: 29px;
  }
}
.a{
font-family: 'Fjalla One', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 17px;
letter-spacing: 0em;
text-align: center;


}
.layout{

}
`;

export default reset;
