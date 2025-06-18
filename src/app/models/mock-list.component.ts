import { Comment } from "./coment.model"
export const liste:Comment[]=[
    {
      id:1,
      author:"French codeur",
      message:"Php est meileur lanage de programmation que Java",
      timestamp: new Date(),
      replies:[
        {
          id:10,
          author:"Graphicart",
          message:"Mec Arrete mdr",
          timestamp: new Date(),
          replies:[
            {
              id:101,
              author:"Frezzer",
              message:"Il pert les boules lol",
              timestamp: new Date(),
              replies:[],
              likes:14,
              dislikes:36
            },
            {
              id:102,
              author:"French codeur",
              message:"Je t'assure mec ! Syntaxe meilleur fluidite meilleur",
              timestamp: new Date(),
              replies:[],
              likes:20,
              dislikes:96
            },
          ]
        }
      ],
      likes:1204,
      dislikes:3096
    },
    {
      id:1,
      author:"Graphicart",
      message:"Developpeur front taffe plus que developpeur back",
      timestamp: new Date(),
      replies:[
        {
          id:10,
          author:"ikone",
          message:"Completement d'accord!",
          timestamp: new Date(),
          replies:[
            {
              id:111,
              author:"Frezzer",
              message:"T'es fou",
              timestamp: new Date(),
              replies:[],
              likes:14,
              dislikes:36
            },
            {
              id:112,
              author:"French codeur",
              message:"Continue de le suivre dans les conneries",
              timestamp: new Date(),
              replies:[],
              likes:20,
              dislikes:96
            },
          ]
        },
        {
          id: 11,
          author:"French codeur",
          message:"Demande a un front de faire un deploiement on verra si le back est si facile",
          timestamp: new Date(),
          replies:[
             {
              id:113,
              author:"teacher du net",
              message:"C\'est vrai que le deploiement c'est pas facile hein",
              timestamp: new Date(),
              replies:[],
              likes: 32,
              dislikes: 8
             }
          ],
          likes:321,
          dislikes:77
        }
      ],
      likes:1204,
      dislikes:3096
    }
  ]
