  function myfunction(){
            var age,voteable;
var form = ` <h1>CAST YOUR VOTES</h1>
<form>
<input type="text/number"placeholder="input your voter's card ID">
<button style="float:right;">fingerprint validate</button>
<br>


<table>
    <tr>
        <th>PDP</th>
        <th>APC</th>
        <th>NPP</th>
    </tr>
<tr>
<td><input type="radio" name="check">HON.DELE ODULE</input></td>
<td><input type="radio" name="check">HON.FEYISARA EDWARD</input></td>
<td><input type="radio" name="check">DR.ODUTOLA ODULE</input></td>
</tr>
</table>
<input type="submit" value="submit">
</form>`;
            age =document.getElementById("age").value;
            if(age < 18){
              document.getElementById("demo").innerHTML="you are not eligible";
            }else{
            document.getElementById("demo").innerHTML="you are eligible,please proceed";
            }
            if(age == null || ""){
              document.getElementById("demo").innerHTML= "space cannot be blank";
            }
            if (age >= 18){
              document.getElementById("demo2").innerHTML= form;
            }else{
              "not eligible"
            }
            if(age==18){
              alert("hello user!,you're voting for the first time!,all 18yrs old voter should visit the voting center for orientation and fingerprint verification,so that your about to cast vote will be counted....Gracias:)");
            }

  }