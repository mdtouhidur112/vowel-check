let latter = prompt('Inter your letter : ');
latter = latter.toLocaleLowerCase();
if(latter == "a" || latter == "e" || latter == "i" || latter == "o" || latter == "u"){
    document.write('vowel letters');
    
}
else if(latter == "y"){
document.write('special vowel letters');
}
else{
    document.write('consonant letters');
   }



