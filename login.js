//localStorage.setItem('name','mr.Hiep')
console.log(localStorage.getItem('name'))
function save()
{
    let name=document.getElementById('name').value;
    let gender='';
    
    if (document.getElementById('male').checked)
    {
        gender=document.getElementById('male').value;
    } else if(document.getElementById('female').checked){
        gender=document.getElementById('female').value;
    }
    if(_.isEmpty(name))
    {
        document.getElementById('name-error').innerHTML= 'Vui lòng nhập tên ! ' ;
    } else if (name.trim().length<=1)
    {
        document.getElementById('name-error').innerHTML= 'Tên không hợp lệ ! ' ;
    } 
    else {
      document.getElementById('name-error').innerHTML='';
    } 
    if (_.isEmpty(gender))
    {
        document.getElementById('gender-error').innerHTML= 'Vui lòng chọn giới tính !'
    } else {
        document.getElementById('gender-error').innerHTML= ''
    }
}
function nametc()
{
    let string=localStorage.getItem('name') ?[]: JSON.parse(localStorage.getItem('name'));
}
