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
    title: "Forever Mine",
    file: "Forever Mine_Adam Howe_Mark Kline.mp3",
    wordsmusic: "Adam Howe & Mark Kline",
    lyrics: `I knew you before and after
    Your endless smile and perfect laughter
    Not a single day goes by
    When I don’t joyfully cry
    A beauty so divine
    You are forever mine
    
    You are all my family
    A son and a daughter
    As far as the eye can see
    A brother and a sister
    My love for you is so divine
    you are forever mine
    
    You gave me the shining light
    You are my Hope
    Every day and every night
    I’ll always help you cope 
    My daughter, so divine  
    you are forever mine
    
    I knew you before and after
    Your endless smile and perfect laughter
    Not a single day goes by
    When I don’t joyfully cry
    A beauty so divine
    You are forever mine
     
    You fought so hard before me
    I’ll always fight for you
    My act of holy chivalry
    Our love forever true
    My son, so divine  
    You are forever mine   
    
    I knew you before and after
    Your endless smile and perfect laughter
    Not a single day goes by
    When I don’t joyfully cry
    A beauty so divine 
    You are forever mine
    
    Like father, like son
    A mother, a daughter
    You all complete me
    My brother and sister
    You are beautiful, you’re so divine
    You are forever mine
    
    I knew you before and after
    Your endless smile and perfect laughter   
    Not a single day goes by  
    When I don’t joyfully cry   
    A beauty so divine
    You are forever mine`
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
  },
  {
    title: "Instrument",
    file: "Instrument_Mark_Kline.mp3",
    wordsmusic: "Mark Kline",
    lyrics: `Your heart's on fire with some crazy higher calling
    Yet meant-to-be don't mean your ship is set to sail
    So many voices offer carefully assessed rejections
    Well-wishing friends suggest your dreams go on the shelf
    
    Sometimes fighting currents lets you know which way to swim
    The world's against you, so try and try again
    
    Just do your thing; use your gifts
    Don't hold back; never quit
    Well, it's not for you; it's all for Him,
    You're an instrument; you’re an instrument,
    You’re an instrument; an instrument
    
    It's kind of silly how we hold some people higher
    For having more in talent, therefore more to give away
    Small gifts can multiply when used in the right place and time
    Either way, give everything
    
    Two pennies offered up will purchase more for you
    Than millions stored and wasted for the treasures of the earth
    
    So do your thing; use your gifts
    Don't hold back; never quit
    Well, it's not for you; it's all for Him,
    You're an instrument; you’re an instrument,
    You’re an instrument; an instrument
    
    of love, joy, and peace
    Hope for those in need
    Kindness and goodness and faithfulness
    You are an instrument of God
    You are an instrument of God
    You are an instrument of God
    
    Well it's not for you; it's all for Him,   
    You're an instrument; you’re an instrument,
    You’re an instrument; an instrument`
  }
];

const template = {
  title: "",
  file: ".mp3",
  wordsmusic: "Mark Kline",
  lyrics: ``
};
export { Song, songs };
