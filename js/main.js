$(()=>{
  $('#keisanBtn').on('click',()=>{
    let weight = Number($('#weight').val());
    // console.log(weight);
    let kariheight = Number($('#height').val());
    // console.log(height);
    let height;
    let bmi;
    let TekiseiWeight;
    let Tekisei;
    let yourBmi;

    if(kariheight >2){
       height = kariheight/100;
       bmi = (weight/(height**2)).toFixed(1);
       tekiseiWeight = ((height**2)*22).toFixed(1);
       tekisei = '<br>適性体重は、 <font size="+2">'+ tekiseiWeight +'</font> kgです。';
       yourBmi= 'あなたのBMIは、<font size="+2">'+ bmi + ' </font>です。<br>';
       

       if(bmi < 18.5){
         $('#output').html(yourBmi+ 'あなたの体型は、<font size="+2">やせ</font> です。'+ tekisei);
       }else　if(bmi>= 18.5 && bmi <= 22.5){
        $('#output').html(yourBmi+ 'あなたの体型は、<font size="+2">普通</font> です。'+ tekisei);
       } else {
        $('#output').html(yourBmi+ 'あなたの体型は、<font size="+2">肥満</font> です。'+ tekisei);
       };

    }else if(kariheight> 0 && 2> kariheight){
      height = kariheight;
      bmi = (weight/(height**2)).toFixed(1);
      tekiseiWeight = ((height**2)*22).toFixed(1);
      tekisei = '<br>適性体重は、 <font size="+2">'+ tekiseiWeight +'</font> kgです。';
      yourBmi= 'あなたのBMIは、<font size="+2">'+ bmi + ' </font>です。<br>';

      if(bmi < 18.5){
        $('#output').html(yourBmi+ 'あなたの体型は、<font size="+2">やせ</font> です。'+ tekisei);
      }else　if(bmi>= 18.5 && bmi <= 22.5){
       $('#output').html(yourBmi+ 'あなたの体型は、<font size="+2">普通</font> です。'+ tekisei);
      } else {
       $('#output').html(yourBmi+ 'あなたの体型は、<font size="+2">肥満</font> です。'+ tekisei);
      };

    }else{
      $('#output').text('error');
    };
  });
});