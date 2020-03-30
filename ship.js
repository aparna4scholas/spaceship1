class uss{
costructor(hull,fire,accuracy)
{
this.hull = hull;
this.fire = fire;
this.accuracy = accuracy;
}
attack = () =>   
{
 console.log("USS is attacking aliens" +(i+1) );
 if(Math.random()<=Aliens[i].accuracy)
 {
console.log("%c USS attacked alien " +(i+1) +"success" );
if(this.hull_calc(i)<=0)
{
    console.log("%c hey!!its Alien ship " +(i+1) + "destroyed");
}
if(this.retreat()==1)
{

    console.log("%c players went for retreat");
    return;
}

 }




}

}