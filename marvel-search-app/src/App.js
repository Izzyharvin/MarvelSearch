import React, {Component} from 'react';
import List from "./List";
import './App.css';

const hero = {
  "code": 200,
  "status": "Ok",
  "copyright": "© 2019 MARVEL",
  "attributionText": "Data provided by Marvel. © 2019 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2019 MARVEL</a>",
  "etag": "c0c8457d77be817295233efe5b8b4c21bf2d7ca2",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 1,
    "count": 1,
    "results": [
      {
        "id": 1009610,
        "name": "Spider-Man",
        "description": "Bitten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.",
        "modified": "2019-02-06T18:06:19-0500",
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009610",
        "comics": {
          "available": 3752,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62304",
              "name": "Spider-Man: 101 Ways to End the Clone Saga (1997) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/60151",
              "name": "A Year of Marvels (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/57926",
              "name": "A Year of Marvels: April Infinite Comic (2016) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/43501",
              "name": "A+X (2012) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76012",
              "name": "Absolute Carnage (2019) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76014",
              "name": "Absolute Carnage (2019) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/77071",
              "name": "Absolute Carnage: Symbiote Spider-Man (2019) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/320",
              "name": "Actor Presents Spider-Man and the Incredible Hulk (2003) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76863",
              "name": "Adventures of Spider-Man (1996) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76864",
              "name": "Adventures of Spider-Man (1996) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76865",
              "name": "Adventures of Spider-Man (1996) #3"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76866",
              "name": "Adventures of Spider-Man (1996) #4"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76867",
              "name": "Adventures of Spider-Man (1996) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76868",
              "name": "Adventures of Spider-Man (1996) #6"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76869",
              "name": "Adventures of Spider-Man (1996) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76870",
              "name": "Adventures of Spider-Man (1996) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76871",
              "name": "Adventures of Spider-Man (1996) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76872",
              "name": "Adventures of Spider-Man (1996) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76873",
              "name": "Adventures of Spider-Man (1996) #11"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/76874",
              "name": "Adventures of Spider-Man (1996) #12"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 937,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22102",
              "name": "A Year of Marvels (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21110",
              "name": "A Year of Marvels: April Infinite Comic (2016)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
              "name": "A+X (2012 - 2014)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/27272",
              "name": "Absolute Carnage (2019 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/27637",
              "name": "Absolute Carnage: Symbiote Spider-Man (2019)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/458",
              "name": "Actor Presents Spider-Man and the Incredible Hulk (2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/27587",
              "name": "Adventures of Spider-Man (1996 - 1997)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/27025",
              "name": "Adventures Of Spider-Man: Sinister Intentions (2019)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
              "name": "Age of Heroes (2010)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/10235",
              "name": "AGE OF HEROES TPB (2011)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/17318",
              "name": "Age of Ultron (2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24134",
              "name": "Agents of Atlas: The Complete Collection Vol. 1 (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/672",
              "name": "Alias (2001 - 2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/13383",
              "name": "Alias Omnibus (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
              "name": "Alpha Flight (1983 - 1994)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/17650",
              "name": "Alpha: Big Time (2013)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2987",
              "name": "Amazing Fantasy (1962)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/29303",
              "name": "Amazing Fantasy (1995 - 1996)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/769",
              "name": "Amazing Fantasy (2004 - 2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/15280",
              "name": "Amazing Fantasy 15: Spider-Man! (2011 - 2012)"
            }
          ],
          "returned": 20
        },
        "stories": {
          "available": 5710,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/483",
              "name": "Interior #483",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/486",
              "name": "Cover #486",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/487",
              "name": "Interior #487",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/498",
              "name": "SENSATIONAL SPIDER-MAN (2006) #23",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/499",
              "name": "Interior #499",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/599",
              "name": "Interior #599",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/805",
              "name": "Interior #805",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/824",
              "name": "Cover #824",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/838",
              "name": "3 of 3 - Family Business",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/842",
              "name": "1 of 1 -  Secret of the Spider Shop",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/867",
              "name": "Interior #867",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/912",
              "name": "Fantastic Four (1998) #512",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/913",
              "name": "Interior #913",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/916",
              "name": "Fantastic Four (1998) #513",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/917",
              "name": "Interior #917",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/977",
              "name": "Cover #977",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/979",
              "name": "Cover #979",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1018",
              "name": "Amazing Spider-Man (1999) #500",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1019",
              "name": "Interior #1019",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/1020",
              "name": "Amazing Spider-Man (1999) #501",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 35,
          "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009610/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
              "name": "Acts of Vengeance!"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
              "name": "Age of Ultron"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
              "name": "Atlantis Attacks"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
              "name": "Avengers Disassembled"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
              "name": "Avengers VS X-Men"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
              "name": "Chaos War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
              "name": "Civil War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
              "name": "Dark Reign"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
              "name": "Days of Future Present"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/332",
              "name": "Dead No More: The Clone Conspiracy"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/245",
              "name": "Enemy of the State"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
              "name": "Evolutionary War"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
              "name": "Fear Itself"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
              "name": "House of M"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
              "name": "Inferno"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
              "name": "Initiative"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/258",
              "name": "Kraven's Last Hunt"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/151",
              "name": "Maximum Carnage"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
              "name": "Maximum Security"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/333",
              "name": "Monsters Unleashed"
            }
          ],
          "returned": 20
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=cde74825b051f73f560e3fbda220c6a9"
          },
          {
            "type": "wiki",
            "url": "http://marvel.com/universe/Spider-Man_(Peter_Parker)?utm_campaign=apiRef&utm_source=cde74825b051f73f560e3fbda220c6a9"
          },
          {
            "type": "comiclink",
            "url": "http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=cde74825b051f73f560e3fbda220c6a9"
          }
        ]
      }
    ]
  }
}

class App extends Component {
  render() {
    return(
      <List result={hero.data.results}/>
    );
  }
}

export default App;
