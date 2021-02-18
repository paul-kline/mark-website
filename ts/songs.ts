type Song = {
  title: string;
  file: string;
  wordsmusic: string | string[];
  lyrics: string;
  _title?: string;
};
const songs: Song[] = [
  {
    title: "Utopia",
    file: "Utopia.mp3",
    wordsmusic: ["Mark Kline", "Kaitlyn Mikalauskas", "Mark Diamond"],
    lyrics: `It’s been a while since I passed your house
    I wonder if you’re there
    The willow tree, your Chevrolet, 
    the swing where we would lay
    
    I was kissing you, finding love,          
    lost in chestnut hair
    I close my eyes, take-in the scene 
    It’s all so real to me
    I still can’t shake our dream         
    
    You, you, you’re my utopia
    You, you, you’re my utopia
    
    The summer sun paints the grove
    with bees on every bloom
    We’d walk the tracks hand-in-hand
    buzzed on love’s perfume  
    
    It was two as one, no regrets,
    forever, me and you     
    But time goes on, a one-way train      
    It carries you away
    But I can’t leave this place
    
    You, you, you’re my utopia
    You, you, you’re my utopia
     
    Oh, I’ve loved again and I’ve lost
    I’ve dreamed and I’ve awakened
    I fly and then I fall
    
    You, you, you’re my utopia
    You, you, you’re my utopia`
  },
  {
    title: "Tornado",
    file: "Tornado_Full_Mark_Kline.mp3",
    wordsmusic: "Mark Kline",
    lyrics: `I’m looking for healing deep, deep down
      You are the tree; I am the ground
      Your roots grew through me for all those years
      When we were each other’s world
      Storm come and rip you right out
       
      Tornado, tornado
      Tornado
       
      I know that you loved me—it was real
      Just hard to believe
      when nothing is left
      except scattered debris in a field
      Pieces of me, pieces of you,
      can’t tell who was who
      Warm, sunny day
      when it hit like a bolt from the blue
      
      Tornado, tornado,
      Tornado
      Tornado, tornado,
      Tornado
      
      You are the star
      the light of my dreams
      You’re my house in the sky
      Falling apart
      
      I wake up, I wake up and see
      how you brought me so high
      
      Tornado, tornado,
      Tornado
      Tornado, tornado,
      Tornado`
  }
];

export { Song, songs };
