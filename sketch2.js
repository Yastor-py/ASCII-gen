const destiny2 = ".sdadsfafsffsadfasda";


let pies2;

function preload(){
    pies2 = loadImage("code.jpg");

}
function setup(){
    createCanvas(1000,1000);

    background(0);
    //image(pies2, 0, 0, width, height);
    let w = width / pies2.width;
    let h = height / pies2.height;
    pies2.loadPixels();

    for (let j = 0; j < pies2.height; j++){
        let row2 ='';
        for (let i = 0 ; i < pies2.width; i++){
        
            const pixelIndex = (i + j * pies2.width)*4;
            const r = pies2.pixels[pixelIndex + 0];
            const g = pies2.pixels[pixelIndex + 1];
            const b = pies2.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            noStroke();
            fill(r,g,b); //avg
            //square(i*w , j*h, w);

            const len = destiny2.length;
            const charIndex = floor(map(avg, 0, 255,0,len));
            //row2 += destiny2.charAt(charIndex);
            

            textSize(w);
            
            textAlign(CENTER, CENTER);
            text(destiny2.charAt(charIndex), i * w+w*0.5, j * h + h * 0.5);

            
        }
        createDiv(row2);
        //console.log(row);
    }
}
/*
▒▓▒░░▒▓▒▓▒▒▓▒▓░▒▒▒░▓░▓░▒░▒░▒▒▒▓▒░▓░░▓▒▓░▓▒▒▓▒▓▒▒▓▒▓▒░░░▒░░▒░▒▒░▒░▒▒▒▒▓▒▓░▓▒░▓▒▒░▓░▓░▒░▒▒░▓░▒░▒▒▒░
░░░░░▒░▒▓▒▒░░▒▓░░▒▒░▓▒░░░░▒▓░▓▒▒░▓▒▓▒▓░░▒▓▒░▒░▓░▒░░▓░▒▓░▓▒▒░▓▒░▒░▒░░▓░░░▓░▓░▓▒▓▒▒▒░░░▒▓▒
▓▒▒░▒▓▒▒▓▒▒▓▓░▒▒▓▒░░▓░░░▓░░▒▒▒▓▒▒▒░▒░▓▒▒░▓░▓▒▒▓▒░░▓░▒▒▒░▓░░▒░░▒░▒▒▓▒▒▓▒▓▒░░░▓░░▓░▓▒▒▒▒░░▒▓░▒▓▒░
▓▒░▓▒▒▓░░▓░▒▒▒▓░▒▓▒▒░▒░▒▓░░░░▒▒▒▒░▓░▒░▒▓▒▒▒▓░▒▒▓▒▒▒▒▒░▒░░▒▒░▓▒▒▒▒░▒░░░▒▒░▓░░▒░░▒▒▒░▓░▒▒▒░▒▒▒▒▒▒░▒
▒▒▓▓░▒▓▒▒▒░▒▒░▒░▒░▒▒▒░▓░░░▒▒░▒░▒▓░▒░▒▒▒▒░░▒▓▒▓░▓░░▒░░▒░▒░░░░░░▒░▒░▒▒░▓▒░░░▓░▒▒▒░▒▒▒▒▒▓░▓░▒▓░░▒▓▓
░▒▓░▒▓▒▒▓▒▓░▒▒▒░░▒░▒▓░▒▓░░▓░░▒░▒▒▒░▒░░▒▒▓░▒░░▒▒░░▒░▒░░▒░▒▒░▒▒░▒▒░▒░▒░░░▓░░░░▒░▒▒░▒▒░░▓░▒▓░░▓▒▒░
░▒▓▒░░▒▓▒▓░▒▒░▒▒▒▒▒▒▒▒░▓░▒▒░▒▒░░░░░░▒░OOO▒░░▒▓▒░░▓▒▒▒▒▒░▒░░▒░░▒░░▒░░▒░▓░░░▓░▓░▒▒░░▒░▓░░▒▒▒▒▒▒░▒░
▓▒▓▒▓▒▓▒▓▒▓▒▓░▒░▒░▓▒░░▓░▒▓░▒▓░▒░░░▒░OO▒░OO=O=▒░▒░░░▒▓▒░▓░▒░▒▒▒░░▒░░░░░░░▒░░░▓░░░░▒░░▒░▓░░░▓▒▒░░░▒░▓▒
▒░▒▒▓░▓▒▓░▒░▒░░▒░▒░▒▒▒░▓░▒▒░▒░▓░░░#O%%OOO%==%OO▒▒░▒#▓░░▓▒▒▒░▒░▓░░▒▒▒▒░▒░░▓░░░▒░░▒░▒#░#░▒░░░▒▒░▓░▒░░
▒▓▒▓▒░░░▒▒▒▒░▓░▒░▒▒░▓░▒░░▒▓░░▒░░▒O%|i|%|%||i||ii%=%OO%##O░░░▒░░░░░░░▒░░▒░░░░░░▒▒░░░▒░▒░▒▒░▒░▒░░▒#░▒
▓▒▒▓▒░░▓░▓░▒░░░░▒░░░▒▒░▒░▒░░░▒░▒░▒O=|:%===i=:=i=i||=%%OOOO#░▒░▒░▓░▒░░░░▒░#░░#░░░#▒▒▒░░░░░░▒#▓░░▒▒▒░░
▓▒▓░▒▓▒░▒▒░▒▓▒░░▓▒▓░░░▒▒░▒▒▒▒░░O|||=|=i%%%=ii|i=i|||%%#%OO##░░░░░░░░#░#░░░░░▒#░░░#░#░▒░░▒░▒░░░░▒#▒░
▓▒▓░▓░▒▒░▓░░░░▒▒░▒▒░▒▒░░▒░░░░%=%==%%%%%%%=%%=|ii=:|i=|=%O#%#O##░#░#▒░#░░░░░░#░░▒#░░░▓░#░░░▒░▒░▒▒░░▓░
▓▓▒▓▓▒▓░░▒▓▒▓░░░▒▓░░▓▒░▒▒░░▒▒#░░▒O%O%#%=%%%%%=||||||=%=%%O%O#O░░#░░░░##▒#░▒░#░░░▓░#░░▒░░░░░░░▒#▒#▒
▓▒▓▓▒▒▒▓░▓▒▓░▒▒▒░▒░▒▒▒▒░▒░░░▒#░▒░#O#O%%=%%|=%O%%||i||||=|=%%%#%#O░#░░░##░░#░#░░░#░#░░▓#▒#░▒▒░░▓#▒░▒░
▒▓▓▒▒▓▒░░▓▒▒▒▒▒░▒▓░░▓▒░▒░▓░░░░#OOO░%%%=%ii=%Oi==i=i:|i:|=%%%%%O#O▒░##░░░░#░░▒#░▒░░▒#░░░▒░#▒░░░░▒▒░▒
░░░▓▒░▓▒▓░░▒▒▒▒▒▒▒░▒▒░░O░OOOO%%%%O%%%%ii%O=%i|=:|=|i|ii|%%%%%%O░#░▒░#░░#▒#░░░#░░▒░░░░░#░▒░▒▒#░▒#░
▒▓▓░▒▒▓░▓░▒░░▓▒▒▒▒░░▒▒░░▒OOOOO░O░O%OO%%i||=|%=%Oi===i|:i|:i:%==%%%O░###░░░░░░░░▒░#▒#░░▒#░░▓░▒#░▒░▒▒▒
▓▒▓▒▓░▓░▒░░░▒▒▒░░▓░▒░OO%O#%#O%%=%%%%%|||=|%:%i||%=:|::i|i===%=%O░░░░░░##░##░#░░░░▒#░▒▒░#▒░▓░▒▒▒░▓
▓▒▓░▓░▒▓░▓░▒░▒░▒▒▒░░░▒░▒░OO%%%%%%==i|%==|=i=|%:%%Oi%=|i:i:i:=%|%|==#O░▒░░░░▒░▒░░░░▓░░▒░▒▒░▒▓░░▒▒░▒▓░
▓░▓▒░▓░░▓░▒▓▒░░▒▒▒▒▒░░#▒#O=%%%%====ii|i=,,,i=i:=ii%|i=|:||=|=%%%%=|OO░░▒░▒░░#░▒#░░#▓░▓░░▒▒▒░▓▒░▓▓░▓
▒▒░▒▒░▓▒▒▒▒░▒▒░▓░▒░▒▓░▒░░##%=%|%=%===%|i=:.i=%|:=|=%:||i|||:|%%%%|=|%O░░░░░░▓░▒▒░▓#▒░░░▒▒░▒░░▓░▒▒░▒▓
▓▒▒▒▒░▒▓░▒▒▒▒▒▒░▓░▒▒░░░░▒▒#%%%O%%%|===|=|,:,===:i%%%=%i░%=%:%%%%%=====░▒░#▒░░░▒░░░░▓░▒░░▓░▓▒▓░▓░▓▓▒▒
▓░▒░░▒░▒░▒▒░▓▒░░▒░░▒░▒O#OO==|%%=%==%====:.,|=ii%#==%%O%%%%|:%O%%%=%=:░░▒░▒░▓░░▒░▒▒░░▒▒▒░▒▒░▒▒▒▒▒▒░▒
░░▒▒░▓▒░░░░▓░░▓░▒░▒O##O%%%%%%===|i=|==%%.,.,==%|||%%%░#%%#%%%|=%%#O|=O░░░▓░░░▓░▒░░▒▒░░░▒░▒▒▒▒▒▒░▒▓▒
▒░░▓▒▒░░▓░▓░░░░░▒░░▒░#░#O%%%%=%O=%=:i=:|=i::i|%=%%%░%░#%%░%O%%%%%%O##%=#░▒░▓▒▓▒░░░▓░░░▓░▒▒░▒░▒▒▒▓▒▒░
▒▒▒░░▓░░░░░▓░▓░▒░░▒░▒░#▒#OO%==%======|=:==:=i=%%|%O%#%%OO%%%%%=|=%#O##=O▒░▒▒▒░▒▒░░░░▓░░▒░▒▒░▓░▒░░▓░
░░░▓░░░▓░▓░░░░░▒░▒░▒▒░░▒#░%=%|==%==|===%||====%%%%O%O#%%%%%O=%%==%%#%#O%░░▓░▒▓░░▓░▒▒░░░▒░▒░▒▒░▓░░▒░
░▓░░░▓░░▒░░▒░▒▒░▒░░#░O#%%%=%|=%=ii=ii:|=|%==|%%=%#%O%%%%O%%##%=%i%O#░#%OO▒░░▓░░░░░░▒▒▓░▒▒░▓░░▓▒▒░▓░▒
░░▒░░░▒░░░░▒░#░░░#░▒░#O%%=%======|=|%i====:=:%%%O%%%%%%%=O#░O#=%==#░O#%OO░▒▒░░░▒▒▒░▒░░░░░▓░▒▒░▒▒▒░░
░░#░▓░░░▒░░░▒░░▒░▒░░#O%|===|==i|iii::=:=::=%|%%%%OO%%%=%%O%##░%||=O#░O%O%▒░░░▓░▒░░░▒░▓░▓░░▒░▓░▓▒░▓░▒
▒░▓░░░░░░░░▒░▒░░░░#▒░O%i=:i:i:::|:==%=|i=%%%|O%%O%%O|||%%O=OO#O%%=%%#% ,=O░░▒░░░░▒░▒░░░░░▒▒░░░▒░▒░▒░
░░░░▒░▒░▒░░░#░▒▒#▒▒░Oi==|ii::i|i:==%=i||%%=%%%%%#%O%%===: .%%#%O%%%%%:.,,O░▒░░▓░▒░▒░░░▒▒░░░▒▒▒▒▒▒░▒▒
▒▒▒░░#░▒░#░▒▒▒░░░▒░#|==iii:i:::|||===i=|%=%#%%%=%%%%%%|,..O.|O%%#%#%O:.:%##░░▒░░░░░▒░▒░░░▒▒░▒░▒░░▒░▒
░░░░▒░░░▒▒░░▒░░▒▒░O|%|iiii:iii|i|:%|i=|%=i%%%==|%%%O=%| , %.:%%%#%%%%. %░░░▒░▒#▒░▒░░░░▒░▒▒░░░▒░▒▒░▒
░▒▒░░░▓#▒▒░░▒░▒░▓O||i|:i,i::i:|==%O%=ii%==:||||%OO#OO|.,,:,,=%%%#%%%|:|O▒#▒░░░░░░░▒░░▒#░░░▒▒░▓░░▒▒
▓▒░▒▒░░▓▒░░▒▓▒▓#OO|:=i:i:i:i:i|==%===|i%|=:ii|=|%%##░#O=:,,,|%%%%%%%%OO%O#░▒░▒░▒░▒░░░░░░░▓░▒▒░░░▒░▒
░▓░░░▒░░▓▒▒▓▒░░▒░O=:|:i:=i|:::ii=|==i|===iii|i==O%O#O#O%O%%%%%|%%=%OO#░#O%▒###░░▒░#░▒░▒░▓░░▒░▒▒▒░░▓░
░░▒▒░▒▒▒▒░▓▒▒░##OOi:i:=:::i:,,i:i|=%|=|=i::i:|=%%%O%░OO%%%%O%O%%%%%O%#%##O#O|O░░░▒░░░░░░░▒▒░░#░▓░▒░▒
▒▒░▒░░░░░▒▒░▓▒▓▒|::ii:iii:i:i::=%%===||::==:=||=i|%%###O#OO#%%%%%%OOO%||%░O#i=#░░░░▒░▒░▒▒░▒░░#░▒░▓░
░░░▒░▒░░▒▒▒▒▒▒░░=iii:=iii|=|==%=%=%=%======%|||||i%%OO%#░##%#%%#O##%,,:::|░O||O░▒░▒░░▒▒░▒░░░▒░░▒░▒▒░
▓░▒░░░▓░▒░▓░▒▒▒#i:i|:i|:=i=|===%%%%=%==|=i=|i=|%::==#%%#O%##%%#O#O░,: ., .,%|,%▒#░░░░░▒░░▒░░▒░░▒▒▒░▒
░░░░░░░░▒▒░▒▒░OO|ii|||i=ii|i|=%%%==%%i=||=i:ii|=i||=%O%%%%OOO#O#O▒O:. ..,.,O|.|░░▒░░▒░░▒░▒░▒░▓░░░░▒▒
▒▒░░▒░▒▒▒▒▒░##▒O|i|=:|:i=i:|i|||==|==i=:i=:iii==|i%%%=%%O%O#░%##O=O: ,.. :|Oi:#░▒░░▒░▓░░▒▒░▒░░▒▒▒░▒░
░░▒░░░▒▓░▒▒▒░#O%i|=i||:==%=%==|=:=i|i|i|i:iii|=ii|%%%i%OO#O##O#O░░O%, , ,,==|,|░▒░▒░░░▒░░░▒░▒░░░▒▒▒▒
▒▒░░▒░▒░░░▒▒▒░|=|=i=:i:|===%%%=i==i|:=i:i:i:i|==i|i|==|%O%#░O%O%=OO=::...:=Oi,=░░░░▒░▒░░▒▒░░▒▒#▒▒░▒░
░░▒░▒▒▒░▒░▒░O==:|i|:||=%%%%%=||=|||i:i:i:|:%%%||i|%====%##O%|%=%O%||,,: :,|%|,%#▒░▒#░░▒░▒░▒▒▒░▒░▒▒░▓
░▒▒░▒░▒░▒░░▒#%%||i|:=||=%O%%===:==:i:|=:i%==%==%|====|OO%#O|:|%%%%|:,: .,i=O,::░▒░░░▒░▒░▒▒░░▒░▒▒░#▒░
░▒░░▓░▒░░OO#O%==|ii=====%%%==i|||ii=%||||==%==%==%%=i|%%=%O|=:,i%%:... ..|%=,,|░░▒░▒░░░░░░▒#▒░#░▒░▓░
░▒▓▒▒▒▒░▒#%%i==|=:=i|%%O%%%||||::i=%=||:%%==%:i||===%%#%==#=i:,,,,.. : ,,=ii,,=░░▒░#░▒░▒░▒▒░▒░▒░░▓░▒
░▓░░░▒░▓░▒░%=|i==|=%%%%|===|||:=%O%%=%#%===i======|%=%%O##%|::i|ii|:|,::=, ,,:|░▒░░▒░░#░░▒░░▒▒▒▒▒░▒▒
░▒▒▒▒▓▒▒▒▒O=i%=i=|===%=%=%=|O%%%%%%%%%=|=||=|ii:i||%=%=%%%%%|=O%%=|%||,||.,:,:░░░▒░░░▒░▒░▒░░▒░░▒░▓░▓
░▒░▒░░▒░▒#O%=|=|i=%|%=i%%%%%%#%O%%=%==%|=i===i|%%=|=|i=|:i:=|%#O░#O#||,:i|,.:O░░░░░▒#░░░░▒░▒░▓░░▓░▓
▓░▓░▓▒▒▒▒#%=||ii==|=i|%=%%░%%%%%%======i%=||i|%==%|=iii:|=|i==%O░%░O||,:ii::,O%O▒▒▒░░▒░▒#▒░░▒▒░▒▒▓░▓
▒░▒░▒░▒░░%==|%===|==%%%%%%%%%=%%%%%%%%|==|==%%=%|=ii:::,::|:, ,i:||%|.,O|,.,:|#▒▒▒▒▒▒░░░▓▒▒▒▒▓▒▓░░
▒▒░▓░▓░░▒=|i===|%==%=%%%%%%====%%%=%===i====%=%===|::i:=iiO|i:..,,|,,|,|: ,.,|░▓░▒▓▒▒▒░▓░▓▒▒▒▒▓▒▓▒▒
░▒░░▒▒▒▒#||=|i|=i||:%=%%%=%%%%%%=%|||:|===%=|%=|=ii|i:::,i,,=, ,.,,,:.,,:.., |░▒▓▒░▓▒░░▒▒▓▒▓▒▒▓▒▓▒
▒▓░░▓░##O|%|%%|%%=%%%%=%%===|==%%========ii:ii|:::i:,:,.,:,.:,,....,,.:,.: :,:#▓▒▒▓▒░░▒▓▒▒▓▒▓▒▓▒▓▒
▒░░▓▒░O%O=i=%=%|%%=%|%===|i%%%O===i:i|=|=|:i,,,:,i,,.,.:i.,:, ..:.,, :..:.,.::#░▓▒▒▓▒▒▓▒▓▒▓▒▒▓▒▓▒▓▒▒
░▓░░░▒#OO||%=||=%%%%%==i=%%O%%==i:====:::,:,::,ii,i,:.,:,,:.:.,...,,,,:..: :,,#▒▒▓▒▒▒▒▒▓▒▓▓░▒░▒▓▒▓
▒░░▓░░##%%=%:||i=%=|====|%=|=|:|i:=:|i=iiii,::,i.:., : ,,, , ..,:,., :,,,..,,|#░▒▒▒▒▒▓▒▓▒▒▒░░▓▒▓▓░
░▒▓░░▒▒░#%|%i=%%|==i===|%%%%%%%====|=i:iii::::ii,,,.:,,.:..,.,,,..,:...:,., |░▒▒▓░▓▓░▓▒▒▒▒▓░▓▒▓▒▒▓▒
░▒░▒▒░░##==||%=%=i|||==%|i%=%#=%===:=i=||i:i:ii,:., : ,..., , ,:,.,..,,.,,.,%▒▓▒░░░▓▒▒░░▓▓▒▓▓▒▒▒▓
░▒▒░░░▒#O%i=%%||i:=i=|==:%==%=iii:=|=::i:i::i,:,, .: , : ,, :.: :,.:....,.,iO░▓░░▒▓░▓░▒▓▒▒▒▓░▓▒▓▓▒▓
░░▓░░░#%==i==|=i===%==i==|=:|=i|:ii:,::::::i,...:..:.: ,..:..,.,,,..,,,,,:|░▒▒▒░▒▒▓░▓▒▓░░░░▒▓▒▓░
▓░░▒░░O%O|=%::i:=:|:i:|=i|i=%==:=i::ii:::i.:.,,.. .: . ,,,..,:.:..,,... :,:,:O░░░▓▒▒▒▓░▓▒░▒▓░▓▒▒▓▒
░░░░#O%|%=i=:i:::,i:i=:=:=i|i|:i:ii::::.,..,...: ..: ...,.,,..,,,,.,,,.,:,:%▒▒▒▒▒▒░▒▒▓▒▓▒▒▒▓░▒▓▒░▓
▒▒░░▒##%%||i:,i:i,i|=%===:=i:i:ii:ii::,-,:..., ,.. , ..,.:.,.,:.. ,,: .,.,:|░▓░░▒▒▒▓▒▒░▒▒▓░▓▓▒▓▓▒▓
░▒▓░▒#O%=|=ii:i::i=|i||:ii:ii:::i:,,i.::.,,,: , ., ,..,, , .:..,.,,,,..:.,:i#▓░░▒▓▒░▒▒░▓▓▒▒░░▒░░░
▓░▒░▒#O==i:i::::,:.:,,,.,,,.,.:,,:.: ,,.:......., ..,.. ,.,.:., . , .:....,%|O░░▒▒▒▒░▓▒▒▒▒▒▒▒▓▓▓░▒
▒▒▓░░O==:%:|:i::.,,,,,,: ,:.:,.,..: ,,.. .,..,.. : . .., .... ,.,...,..,.:,|░#░░▒▒▒░▓░▒░▒▒▒▒▓▒▒▓▒▓▒▒
▓░░▒░O=i==i|i:,,::i,:.,.:,,, ,..... ... : .. . : ,.,. .....,., . ..., , ,,:O░▓▒▒▒░▓░░▒▒▒▒░▒░▓▒░▒░
▒░▓▒▒O#░░i|:::i.|:.i::::.:.,.,..: :,., , ,., : .,. , : ... . : : . .. ,. ,:░░▒▒▒▒░░▓░▒░▓░▓░▒░▓▓░▓▒
▓░▒▒▓░O░#%:ii::i:i:,i:,i:,i,.:,.,., ,,.,... , .,. ..,.. . , ,. . .,. , , , ,O▒▒░▒▒▒▒░▒░░░░░▒░▒░▒▒▓▒
░░▒░░░O#░iii:::i,:,:ii|:ii,,:,.:,,,, ,..,....,. .,. . ,.,.. , : , . ,......:░░▒▒░▒░░###O#%░▒▒▒▒▓░▒▒
▓▒▓▒▓▒##=|%:i:i:i::i|i|i.::i,i,.,, :,,.,..... , ... : . , , , . ,... ...,.:▒▒░▒#▒#O░#░#░%O%O#▒▒░▓▓
░░░▒░▒OO░OOi|i:i,:i,,i,,:ii:ii||ii:.,,., ,....., ... : : , , ,..,.. ..,. . :░▒▒O|:%%%O░#░#O%%%%▒▒▒▒
▒░░▓░░▒░░O|i|:|||ii.i,-:i|||:i::::,,:.:,:, ,., .., : . ... .. . , : , .,..,:░▒▒iiii%==▒##░O%%%=OO░▒
░▒▒░░▒░░░O%|||O%i,%:::i:ii|::,.::.:.i:,,,.,..., .,. : ... : ,., .. , . . , .░░▒ii::|||#░O##O%%%=%░▒
▒░▒░░░░▒░O#OOOO%OO|i:i:ii:i:i,::ii,i:ii::, , ,..,. ... , , ... , , .., ,....|i%:i,::::%#░░%%##%%=O▒
░░▒░░▓░░░░░░░░░░░iii,ii:i:ii:iii:i:i::::,i,i . , ,...., : ,., : , , , . . ,..,::|., :::|=░##░#O%%%%|
▒▒░▓░░░░░░░░░░░░░|i:,::i::i,:::::::iii,:,ii , : ,... :.. :..., , .. .,..,. , .,,:,.,.,i,:O###░#%%%%=
░░░░░░▓#░░▓░░░▒░Oi,:i:i:|i::::i:,i,i,i=ii|,, ,....,.:..: ,,., ,. : ,.. , .. ,:,:.,..,.,i:%#▒#▒#░OO%%
▓░░▓#░░░▓░░▒▒░░O:,::i,i,: ,,.,.,::.,i,,:, ......: . , : ..: .., ,. :.... ,...::,,,: .,,,::|###░░###%
░░░░░▓░░░▒▒░░░▒O,.:i::,,.,,,,,,,..:,:.,.:,.,., . :.:.... : .. ,,::: ...... : :,:.,.., ,,i:i░░░##▒░░%
=:▒▒░▓▒▒░▒░▒░░#=i::i::,,,:,i,,:,:,:.,i::, , ..:,,,:,.,..:..,... , ..,...., ,:::,i:,:..,.,,i░#O▒#░##░
%|OOi:|O▒░▒░▒░░i::ii.,,i%░O%░#|,i.ii:i,. :.,: ,.:.,.. ,:..,. , : ,.. .,. ...,,::,i,i , ,:i,|#%░##▒##
O#|iOii,i|i||,i%::.,,.:░O%%%%%#OO,:,,::,:.,,.:.:., , : . , ,. . .. : , ,.,.::i,i:i,::,...,:%%%▒O▒░░
OO,O|%=O#:O%|=O=ii|i,,|░#%%%░%%%OO .:,.,:,,..,,, ,.. ...,,..,,.,.,....:, :.,::,i,::ii,.,,,:i=%,|O##
%||%i,#,.|O░|:%||%O|O=OO#O#%%#O░#▒,:,,.::.,,...., . ,.,: .., .... .,,,:,:, :,ii,|iiii|i,...,:i===:##
#|=|O|O||:i|=||=%i|=|i#i,=#OO%##O#,.,.:,: ...,..., : . ,,,..,......:||%i, ,.:,ii,:|i:i=,: :,.i|==:%#
|=iO|=|%O|==OO░░#OO%i=||:|i#OOOO|O░░.,, , , ..,=,....:.. , ....,,░#O░##▒,,,:::::i::=ii|::.,.,:=%%%#
:||:|=|░%i=|=ii|O=OO|%iO|O||iO|i|░O▒░ ,....., :%O▒░=O#░|O.=▒░░░#O#O%%%O#░ ,,:,:i:,ii:|:i|:,,,,.i|%%O
OOO%OOO|%░OO|||=|||:|i|OOO|Oi|||░O=:O , , , .|OO▒▓░░░░░░▒#▒░####░O%%O%░O#,,,:::::|:|i:|:=i:...,i%=OO
,:=O#%O%OOO%=|OO░%O#OO||ii%:||:::|,i||O=|#|#▒#░░#░#░%O#░#░%%%=%%%%:i|i%|ii,,:,:i:,i:i:ii:i::.:.ii%%O
O|#O|OOO#OO%=|O%|OO%|░O|i%|,|i:|:%,Oi|i,|%|,,:O#▒#%O%|%#OO%%%#i%%i|,i|%|::.:,i,:::i:i||i:=:: ..,:|%%
%OO##OO#%|%=#▒%iO%|O%%%O%|=%%|%iii,i.,:||:,,,,,:▓O==i%O%%%%%|%=|%=:||ii:|,,,:,i,i:::i,:i|:i,,,,,:i%=
||▒=O#OO%|=iO%||=|=||iO|OiOOOO|i%|||,,,i|:,:|ii, ,%i%░%%%%%||:=O:i,i,i::.,.:,:::ii:i|:i|i|,:...,i|%
||%#Oi:|%ii%|iiOi|||==%=|O%==i|i|i|i|i|=i|:|,,,|||||||%O|%|:|||,::,:i,,,:,,,,:,:,,i,ii:::iii.: :,.ii*/