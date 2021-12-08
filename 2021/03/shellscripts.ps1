$inputdata = get-content "input.txt"

$testdata=@(

"00100","11110","10110","10111","10101","01111","00111","11100","10000","11001","00010","01010"

)

#$inputdata=$testdata

$occurrences=@{}

foreach($item in $inputdata){

$itemarray = $item.ToCharArray()

for($i=0;$i -le ($itemarray.count -1);$i++){

if(-not ($occurrences[$i])){

$occurrences[$i]=@{

0=0;

1=0;

}

}

if($itemarray[$i] -eq "0"){

$occurrences[$i][0]++

} else {

$occurrences[$i][1]++

}

}

}

[string]$gamma=""

[string]$epsilon=""

for($i=0;$i -le ($occurrences.keys.count -1);$i++){

if($occurrences[$i][0] -gt $occurrences[$i][1] ){

$gamma+="0"

$epsilon+="1"

} else {

$gamma+="1"

$epsilon+="0"

}

}

write-host "Gamma: $gamma - Epsilon: $epsilon"

$gammaint=[Convert]::ToInt32($gamma,2)

$epsilonint=[Convert]::ToInt32($epsilon,2)

write-host "$($gammaint * $epsilonint)"

$co2list=$inputdata

$o2list=$inputdata

for($i=0;$i -lt ($gamma.length);$i++){

$startpattern = ("." * ($gamma.length))

if($o2list.count -gt 1){

$o2matcharray = $startpattern.ToCharArray()

$o2commons = $o2list.substring($i,1) | Group-Object | sort-object -Descending Count

if($o2commons[0].Count -eq $o2commons[1].count){

write-host "RACE CONDITION"

$o2matcharray[$i]="1"

} else {

if($o2commons[0].Count -gt $o2commons[1].count){

$o2matcharray[$i]=$o2commons[0].Name

} else{

$o2matcharray[$i]=$o2commons[1].Name

}

}

$o2matchstring = $o2matcharray -join ""

write-host $o2matchstring

$o2list = $o2list -match $o2matchstring

}

if($co2list.count -gt 1){

$co2matcharray = $startpattern.ToCharArray()

$co2commons = $co2list.substring($i,1) | Group-Object | sort-object -Descending Count

if($co2commons[0].Count -eq $co2commons[1].count){

write-host "RACE CONDITION"

$co2matcharray[$i]="0"

} else {

if($co2commons[0].Count -gt $co2commons[1].count){

$co2matcharray[$i]=$co2commons[1].Name

} else{

$co2matcharray[$i]=$co2commons[0].Name

}

}

$co2matchstring = $co2matcharray -join ""

write-host $co2matchstring

$co2list = $co2list -match $co2matchstring

}

}

$o2list

$co2list

$o2int=[Convert]::ToInt32($o2list[0],2)

$co2int=[Convert]::ToInt32($co2list[0],2)

write-host "$($o2int * $co2int)"