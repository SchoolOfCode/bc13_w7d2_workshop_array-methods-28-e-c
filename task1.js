const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(capitalise);

function capitalise(cat){
    return cat.toUpperCase();
}
