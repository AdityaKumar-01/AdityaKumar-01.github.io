var mat= new Array(3);
var playerId=1;
var counter=0;
var flag=false;
for(var i=0;i<3;i++)
    mat[i]=[0,0,0];

function horizontal(id, playerId)
{
    for(var i=0;i<3;i++)
    {
        if(mat[Math.floor((id)/10)][i]!=playerId)
            return false;
    }
    return true
}
function vertical(id, playerId)
{
    for(var i=0;i<3;i++)
    {
        if(mat[i][Math.floor((id)%10)]!=playerId)
            return false;
    }
    return true
}
function cross(playerId)
{
    var right=true,left=true;
    for(var i=0;i<3;i++)
        for(var j=0;j<3;j++)
            if((i+j)==2 && mat[i][j]!=playerId)
            {
                right=false;
                break;
            }
    if(right)
        return true;
    for(var i=0;i<3;i++)
        for(var j=0;j<3;j++)
            if(mat[i][j]!=playerId && i==j)
            {
                left=false;
                break;
            }   
    if(left)
        return true;
    else
    return false;
}
function check(id)
{
    if(flag)
        console.log("hi");
    else if(counter==9)
        console.log("Draw");
    else
        console.log("Game is still on!!");
}
$('.box').on('click',function()
{
    counter++;
    if(playerId==1)
    {
        mat[Math.floor((this.id)/10)][Math.floor((this.id)%10)]=1;
        if(horizontal(this.id,1) || vertical(this.id,1) || cross(1))
            flag=true;
        this.textContent="X";
        check(playerId);
        if(flag)
        {
            $('.up1').css('display','inline');
            $('.down2').css('display','inline');
            // $(".options").css('left','410px');
        }
        
    }
    else
    {
        mat[Math.floor((this.id)/10)][Math.floor((this.id)%10)]=2;
        if(horizontal(this.id,2) || vertical(this.id,2) || cross(2))
            flag=true;
        this.textContent="O";
        check(playerId);
        if(flag)
        {
            $('.up2').css('display','inline');
            $('.down1').css('display','inline');
            // $(".options").css('left','410px');
        }
        
    }
    if(counter==9 && !flag)
    {
        
        $('.Draw').css({'display':'inline',"transition":"display 0.5"});
        $(".options").css({'display':'none',"transition":"display 0.5"}); 
    }
    else if(flag)
    {
        $(".playerOne, .playerTwo").css('opacity',"1")
    }
    else if(playerId==1)
    {
        $(".playerOne").css("opacity",'0.3');
        $(".playerTwo").css("opacity","1");
        
        playerId=2;
    }
    else if(playerId==2)
    {
        $(".playerTwo").css("opacity",'0.3');
        $(".playerOne").css("opacity","1");
        playerId=1;
    }
});
