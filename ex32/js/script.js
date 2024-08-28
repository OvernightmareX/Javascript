import { Pokemon } from "./class/pokemon.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon";
const input = document.getElementById("pokemonInput");
const errDisplay = document.getElementById("displayErr"); 

const headerPokemonOutput = document.getElementById("head"); 
const namePokemonOutput = document.getElementById("name"); 
const typePokemonOutput = document.getElementById("typeIcons"); 
const imagePokemonOutput = document.getElementById("imagePokemon"); 
const infoPokemonOutput = document.getElementById("pokemonInfos");
const skillPokemon = document.getElementById("skills");

let currentPokemon; 

function capitalize(word){
    let endWord = word.slice(1); 
    return word[0].toUpperCase() + endWord.toLowerCase();
}

function pokemonMapping(data){

    let pokeTypes = []; 
    data.types.forEach(element => {
        pokeTypes.push(element.type.name);  
    });
    
    let pokeSkills = []; 
    data.abilities.forEach(element => {
        pokeSkills.push(element.ability.name);  
    });

    let pokeImage = data.sprites.front_default; 

    return new Pokemon(data.id, data.name, data.weight, data.height, pokeTypes, pokeSkills, pokeImage);
}

function selectIconType(type){
    let typeImage; 

    const water = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl12-8e849c4d-fb0e-4d08-b673-0ae59eee5805.png/v1/fill/w_1280,h_1280/water_type_symbol_galar_by_jormxdos_dffvl12-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwxMi04ZTg0OWM0ZC1mYjBlLTRkMDgtYjY3My0wYWU1OWVlZTU4MDUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.PmOI40XikNF0a-5I1ua_tL0uVAD5znTSd38Vb6qaKBU";
    const fire = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl1m-a992d76d-bfa4-41cd-bff6-7546b47f2184.png/v1/fill/w_894,h_894/fire_type_symbol_galar_by_jormxdos_dffvl1m-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwxbS1hOTkyZDc2ZC1iZmE0LTQxY2QtYmZmNi03NTQ2YjQ3ZjIxODQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DBmvPsi4hX6q3f8XHGcinkRbtbV2zsh5nB-_s9wse_4";
    const electric = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl6b-dde44f5e-8bc6-4627-88dc-897d937b57ee.png/v1/fill/w_1280,h_1280/electric_type_symbol_galar_by_jormxdos_dffvl6b-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw2Yi1kZGU0NGY1ZS04YmM2LTQ2MjctODhkYy04OTdkOTM3YjU3ZWUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ylqFNiIPplKYSHm9NxvolhBO4PIWAn5PWX3L4iFPQXs";
    const grass = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl0s-d443a3b4-fa4e-47a6-99b4-d2a769785614.png/v1/fill/w_1280,h_1280/grass_type_symbol_galar_by_jormxdos_dffvl0s-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwwcy1kNDQzYTNiNC1mYTRlLTQ3YTYtOTliNC1kMmE3Njk3ODU2MTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6-S1a0_YYhlP6eXW5QqrJk4jtv6b5a3MRuugxqhJ6EA";
    const rock = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl3a-c5227b2a-e30d-4235-975f-2c7f933e6e6e.png/v1/fill/w_1280,h_1280/rock_type_symbol_galar_by_jormxdos_dffvl3a-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwzYS1jNTIyN2IyYS1lMzBkLTQyMzUtOTc1Zi0yYzdmOTMzZTZlNmUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cFxsqSWmRdkJEASQm0a-NabpZLvozfi8QM4239W3fww";
    const steel = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl50-eef3fc08-9339-4135-8c19-76be942c77ab.png/v1/fill/w_1280,h_1280/steel_type_symbol_galar_by_jormxdos_dffvl50-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw1MC1lZWYzZmMwOC05MzM5LTQxMzUtOGMxOS03NmJlOTQyYzc3YWIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ppmW3CGOkmE6wnnFeeSlv0QToZ-DiNxKFhdVizDzhck";
    const ice = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl40-c3b719e6-2acc-48e0-882a-ac3058a944b9.png/v1/fill/w_1280,h_1280/ice_type_symbol_galar_by_jormxdos_dffvl40-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw0MC1jM2I3MTllNi0yYWNjLTQ4ZTAtODgyYS1hYzMwNThhOTQ0YjkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OUuCZGLYjzvozAeQwII4FV6Ef9RZkVPE0Tf17C5qa2I";
    const ghost = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl2d-818164a9-f8e6-41fc-ba4e-c725e2be0d66.png/v1/fill/w_1280,h_1280/ghost_type_symbol_galar_by_jormxdos_dffvl2d-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwyZC04MTgxNjRhOS1mOGU2LTQxZmMtYmE0ZS1jNzI1ZTJiZTBkNjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.YKEzh2shCheghxM31oOkuEOOrQlMeW1axtKAyK-Iceg";
    const dragon = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl4n-1942f6ac-3f08-4dbb-a761-a722f791bc37.png/v1/fill/w_1280,h_1280/dragon_type_symbol_galar_by_jormxdos_dffvl4n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw0bi0xOTQyZjZhYy0zZjA4LTRkYmItYTc2MS1hNzIyZjc5MWJjMzcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Q9B0RKlPeJSmVIrfZq75vfmVscHZ50jPWPViMQp68kc";
    const poison = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl5p-899b860a-d006-4425-86fb-012844c1e8d3.png/v1/fill/w_1280,h_1280/poison_type_symbol_galar_by_jormxdos_dffvl5p-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw1cC04OTliODYwYS1kMDA2LTQ0MjUtODZmYi0wMTI4NDRjMWU4ZDMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hz_DHqV4XnnzPBce9SWmcaUmx6-egrOyvj2rNqS9ywY";
    const bug = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl73-294f6e5b-aad2-484f-bde8-1ecf082f1dfe.png/v1/fill/w_1280,h_1280/bug_type_symbol_galar_by_jormxdos_dffvl73-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw3My0yOTRmNmU1Yi1hYWQyLTQ4NGYtYmRlOC0xZWNmMDgyZjFkZmUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.msN6ZkYf5XuPiA27qO-1Zaow3B4iSRqp3nAHzctfBW0";
    const fairy = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl2x-0d3cd17b-b043-4fe6-9efe-e03e79df84b0.png/v1/fill/w_1280,h_1280/fairy_type_symbol_galar_by_jormxdos_dffvl2x-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwyeC0wZDNjZDE3Yi1iMDQzLTRmZTYtOWVmZS1lMDNlNzlkZjg0YjAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.29R4ouYaIY5Iu4F4hDV35xJG1g1M3ixja_2jIJl1hPI";
    const psychic = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl5b-bde5e34d-f803-4631-9c9d-84c7512d0254.png/v1/fill/w_1280,h_1280/psychic_type_symbol_galar_by_jormxdos_dffvl5b-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw1Yi1iZGU1ZTM0ZC1mODAzLTQ2MzEtOWM5ZC04NGM3NTEyZDAyNTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GdprCZ3xkD5I-yvUUfHtmkyBpuexlOXXO_amm1s-HNk";
    const dark = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl4c-00dcc9df-03ac-43ca-aeca-bf64e7839ada.png/v1/fill/w_1280,h_1280/dark_type_symbol_galar_by_jormxdos_dffvl4c-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw0Yy0wMGRjYzlkZi0wM2FjLTQzY2EtYWVjYS1iZjY0ZTc4MzlhZGEucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.7-jDNz2kWWs8QWJBDL1Dmpo2Dx7-oaPY1cWgW48FvNk";
    const ground = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl6w-4d2813ab-f8b9-4680-a2b9-5cd8cba67e62.png/v1/fill/w_1280,h_1280/ground_type_symbol_galar_by_jormxdos_dffvl6w-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw2dy00ZDI4MTNhYi1mOGI5LTQ2ODAtYTJiOS01Y2Q4Y2JhNjdlNjIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.mi6G6qA4y9sPShd2XU7_6zc75r0f-07Wc8R2S9F-JtM";
    const normal = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl62-5a7d2cd1-0e54-4a3f-870d-bce6d157a84f.png/v1/fill/w_1280,h_1280/normal_type_symbol_galar_by_jormxdos_dffvl62-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw2Mi01YTdkMmNkMS0wZTU0LTRhM2YtODcwZC1iY2U2ZDE1N2E4NGYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.6WIqtbC5CGYGzevXOzcj0_mP0hLVcWBD3hHs95hhCZw";
    const flying = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl6n-4e403272-f641-4ec0-a451-49061d40aef6.png/v1/fill/w_1280,h_1280/flying_type_symbol_galar_by_jormxdos_dffvl6n-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmw2bi00ZTQwMzI3Mi1mNjQxLTRlYzAtYTQ1MS00OTA2MWQ0MGFlZjYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xTE63SRI89iYddks3zDYryz4UkqEFOCAOH5_feLbQHs";
    const fighting = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8ddc4da-23dd-4502-b65b-378c9cfe5efa/dffvl1w-af8f2039-82d6-44f3-b06f-2446aff1db82.png/v1/fill/w_1280,h_1280/fighting_type_symbol_galar_by_jormxdos_dffvl1w-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2U4ZGRjNGRhLTIzZGQtNDUwMi1iNjViLTM3OGM5Y2ZlNWVmYVwvZGZmdmwxdy1hZjhmMjAzOS04MmQ2LTQ0ZjMtYjA2Zi0yNDQ2YWZmMWRiODIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.pUH2kjRpC3pnjJTusKxTqAW4SmmS5Mm0bNXcBR9xIdI";

    switch(type){
        case "fire": 
            typeImage = fire; 
            break; 
        case "water": 
            typeImage = water; 
            break; 
        case "electric": 
            typeImage = electric; 
            break; 
        case "grass": 
            typeImage = grass; 
            break; 
        case "rock": 
            typeImage = rock; 
            break; 
        case "steel": 
            typeImage = steel; 
            break; 
        case "ice": 
            typeImage = ice; 
            break; 
        case "ghost": 
            typeImage = ghost; 
            break; 
        case "dragon": 
            typeImage = dragon; 
            break; 
        case "poison": 
            typeImage = poison; 
            break; 
        case "bug": 
            typeImage = bug; 
            break; 
        case "fairy": 
            typeImage = fairy; 
            break; 
        case "psychic": 
            typeImage = psychic; 
            break; 
        case "dark": 
            typeImage = dark; 
            break; 
        case "ground": 
            typeImage = ground; 
            break; 
        case "normal": 
            typeImage = normal; 
            break; 
        case "flying": 
            typeImage = flying; 
            break;
        case "fighting":
            typeImage = fighting; 
            break;
    }

    return typeImage; 
}

function displayPokemon(pokemon){
    headerPokemonOutput.classList.toggle("hidden");
    namePokemonOutput.textContent = capitalize(pokemon.name); 

    typePokemonOutput.innerHTML="";
    pokemon.types.forEach((element) => {
        typePokemonOutput.innerHTML += `<image src=${selectIconType(element)} style="width: 28px; height: 28px;">`;
    }); 
    imagePokemonOutput.src = pokemon.image; 

    let pokeNb = "000" + pokemon.id;
    pokeNb = pokeNb.slice(pokeNb.length-4, pokeNb.length);

    infoPokemonOutput.textContent = `N°${pokeNb} Taille: ${pokemon.height}" Poids: ${pokemon.weight} lbs`;

    skillPokemon.innerHTML =""; 
    pokemon.skills.forEach((skill) => {
        let h = document.createElement('h5'); 
        h.textContent = capitalize(skill); 
        skillPokemon.appendChild(h);
    })
}

window.onload = (event) => {
    searchPokemon("submit", "1");
};

async function searchPokemon(searchType, value){

    let pokeIndex; 
    if (value != '' || searchType != "submit") {
        try {
            switch(searchType)
            {
                case "submit": 
                    pokeIndex= value.toLowerCase();
                    break;
                case "next":
                    if(currentPokemon==1025)
                        pokeIndex = 1025;
                    else
                        pokeIndex=++currentPokemon; 
                    break; 
                case "previous":
                    if(currentPokemon==1)
                        pokeIndex=1; 
                    else
                        pokeIndex=--currentPokemon; 
                    break; 
            }

            const response = await fetch(`${apiUrl}/${pokeIndex}`); 
            const data = await response.json(); 
            
            let selectedPokemon = pokemonMapping(data); 
            currentPokemon = selectedPokemon.id; 
            displayPokemon(selectedPokemon);   

        } catch (error) {
            errDisplay.classList.toggle("hidden");
            setTimeout(() => errDisplay.classList.toggle("hidden"), 5000); 
        }
    }
}

document.getElementById("previousButton").addEventListener('click', () => {
    searchPokemon("previous", input.value);
})

document.getElementById("nextButton").addEventListener('click', () => {
    searchPokemon("next", input.value);
})

document.getElementById("submitButton").addEventListener('click', () => {
    searchPokemon("submit", input.value); 
})