/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $hash2 = Opal.hash2;

  Opal.add_stubs(['$debug', '$gsub', '$new', '$const_get', '$to_s', '$===', '$downcase', '$map', '$to_proc', '$[]', '$raise', '$first', '$include?', '$each']);
  return (function($base, $super, $parent_nesting) {
    function $DiceBotLoader(){};
    var self = $DiceBotLoader = $klass($base, $super, 'DiceBotLoader', $DiceBotLoader);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_DiceBotLoader_loadUnknownGame_1, TMP_DiceBotLoader_initialize_2, TMP_DiceBotLoader_match$q_3, TMP_DiceBotLoader_loadDiceBot_5;

    def.filenames = def.gameTitlePattern = def.diceBotClass = nil;
    
    Opal.defs(self, '$loadUnknownGame', TMP_DiceBotLoader_loadUnknownGame_1 = function $$loadUnknownGame(gameTitle) {
      var self = this, escapedGameTitle = nil, e = nil;

      
      self.$debug("loadUnknownGame gameTitle", gameTitle);
      escapedGameTitle = gameTitle.$gsub(/(\.\.|\/|:|-)/, "_");
      
      try {
        return Opal.const_get_relative($nesting, 'Object').$const_get(gameTitle.$gsub(/[\.\/:-]/, "_")).$new()
      } catch ($err) {
        if (Opal.rescue($err, [Opal.const_get_relative($nesting, 'LoadError'), Opal.const_get_relative($nesting, 'StandardError')])) {e = $err;
          try {
            
            self.$debug("DiceBot load ERROR!!!", e.$to_s());
            return nil;
          } finally { Opal.pop_exception() }
        } else { throw $err; }
      };;
    }, TMP_DiceBotLoader_loadUnknownGame_1.$$arity = 1);
    
    Opal.defn(self, '$initialize', TMP_DiceBotLoader_initialize_2 = function $$initialize(gameTitlePattern, options) {
      var $a, self = this, $case = nil, defaultFilenames = nil;

      if (options == null) {
        options = $hash2([], {});
      }
      
      $case = gameTitlePattern;
      if (Opal.const_get_relative($nesting, 'String')['$===']($case)) {self.gameTitlePattern = [gameTitlePattern.$downcase()]}
      else if (Opal.const_get_relative($nesting, 'Array')['$===']($case)) {self.gameTitlePattern = $send(gameTitlePattern, 'map', [], "downcase".$to_proc())}
      else if (Opal.const_get_relative($nesting, 'Regexp')['$===']($case)) {
      if ($truthy(options['$[]']("filenames"))) {
        } else {
        self.$raise(Opal.const_get_relative($nesting, 'ArgumentError'), "options[:filenames] is required when gameTitlePattern is a Regexp")
      };
      self.gameTitlePattern = gameTitlePattern;}
      else {self.$raise(Opal.const_get_relative($nesting, 'TypeError'), "gameTitlePattern must be a String or an Array<String> or a Regexp")};
      defaultFilenames = (function() {$case = gameTitlePattern;
      if (Opal.const_get_relative($nesting, 'String')['$===']($case)) {return [gameTitlePattern]}
      else if (Opal.const_get_relative($nesting, 'Array')['$===']($case)) {return [gameTitlePattern.$first()]}
      else if (Opal.const_get_relative($nesting, 'Regexp')['$===']($case)) {return []}
      else { return nil }})();
      self.filenames = ($truthy($a = options['$[]']("filenames")) ? $a : defaultFilenames);
      return (self.diceBotClass = ($truthy($a = options['$[]']("class")) ? $a : self.filenames.$first()));
    }, TMP_DiceBotLoader_initialize_2.$$arity = -2);
    
    Opal.defn(self, '$match?', TMP_DiceBotLoader_match$q_3 = function(gameTitle) {
      var self = this, $case = nil;

      return (function() {$case = self.gameTitlePattern;
      if (Opal.const_get_relative($nesting, 'Array')['$===']($case)) {return self.gameTitlePattern['$include?'](gameTitle.$downcase())}
      else if (Opal.const_get_relative($nesting, 'Regexp')['$===']($case)) {return self.gameTitlePattern['$==='](gameTitle)}
      else { return nil }})()
    }, TMP_DiceBotLoader_match$q_3.$$arity = 1);
    return (Opal.defn(self, '$loadDiceBot', TMP_DiceBotLoader_loadDiceBot_5 = function $$loadDiceBot() {
      var TMP_4, self = this;

      
      $send(self.filenames, 'each', [], (TMP_4 = function(filename){var self = TMP_4.$$s || this;
if (filename == null) filename = nil;
      return nil}, TMP_4.$$s = self, TMP_4.$$arity = 1, TMP_4));
      return Opal.const_get_relative($nesting, 'Object').$const_get(self.diceBotClass).$new();
    }, TMP_DiceBotLoader_loadDiceBot_5.$$arity = 0), nil) && 'loadDiceBot';
  })($nesting[0], null, $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
Opal.loaded(["diceBot/DiceBotLoader"]);
/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy, $send = Opal.send, $hash2 = Opal.hash2;

  Opal.add_stubs(['$require', '$strip', '$empty?', '$find', '$match?', '$new']);
  
  self.$require("diceBot/DiceBotLoader");
  return (function($base, $super, $parent_nesting) {
    function $DiceBotLoaderList(){};
    var self = $DiceBotLoaderList = $klass($base, $super, 'DiceBotLoaderList', $DiceBotLoaderList);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_DiceBotLoaderList_find_2;

    
    Opal.defs(self, '$find', TMP_DiceBotLoaderList_find_2 = function $$find(gameTitle) {
      var TMP_1, self = this, strippedTitle = nil;
      if (self.loaders == null) self.loaders = nil;

      
      strippedTitle = gameTitle.$strip();
      if ($truthy(strippedTitle['$empty?']())) {
        return nil};
      return $send(self.loaders, 'find', [], (TMP_1 = function(loader){var self = TMP_1.$$s || this;
if (loader == null) loader = nil;
      return loader['$match?'](strippedTitle)}, TMP_1.$$s = self, TMP_1.$$arity = 1, TMP_1));
    }, TMP_DiceBotLoaderList_find_2.$$arity = 1);
    return (self.loaders = [Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["Cthulhu", "COC"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["Hieizan", "COCH"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["Elric!", "EL"], $hash2(["filenames"], {"filenames": ["Elric"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["RuneQuest", "RQ"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["Chill", "CH"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["RoleMaster", "RM"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["ShadowRun", "SR"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["ShadowRun4", "SR4"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["Pendragon", "PD"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:SwordWorld|SW)\s*2\.0$/i, $hash2(["filenames", "class"], {"filenames": ["SwordWorld", "SwordWorld2_0"], "class": "SwordWorld2_0"})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:SwordWorld|SW)\s*2\.5$/i, $hash2(["filenames", "class"], {"filenames": ["SwordWorld", "SwordWorld2_5"], "class": "SwordWorld2_5"})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["SwordWorld", "SW"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["Arianrhod", "AR"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Infinite\s*Fantasia|IF)$/i, $hash2(["filenames"], {"filenames": ["InfiniteFantasia"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("WARPS"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Demon\s*Parasite|DP)$/i, $hash2(["filenames"], {"filenames": ["DemonParasite"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Parasite\s*Blood|PB)$/i, $hash2(["filenames", "class"], {"filenames": ["DemonParasite", "ParasiteBlood"], "class": "ParasiteBlood"})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Gun\s*Dog|GD)$/i, $hash2(["filenames"], {"filenames": ["Gundog"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Gun\s*Dog\s*Zero|GDZ)$/i, $hash2(["filenames", "class"], {"filenames": ["Gundog", "GundogZero"], "class": "GundogZero"})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Tunnels\s*&\s*Trolls|TuT)$/i, $hash2(["filenames"], {"filenames": ["TunnelsAndTrolls"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Nightmare\s*Hunter[=\s]*Deep|NHD)$/i, $hash2(["filenames"], {"filenames": ["NightmareHunterDeep"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:War\s*Hammer(FRP)?|WH)$/i, $hash2(["filenames"], {"filenames": ["Warhammer"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Phantasm\s*Adventure|PA)$/i, $hash2(["filenames"], {"filenames": ["PhantasmAdventure"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Chaos\s*Flare|CF)$/i, $hash2(["filenames"], {"filenames": ["ChaosFlare"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Cthulhu\s*Tech|CT)$/i, $hash2(["filenames"], {"filenames": ["CthulhuTech"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Tokumei\s*Tenkousei|ToT)$/i, $hash2(["filenames"], {"filenames": ["TokumeiTenkousei"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Shinobi\s*Gami|SG)$/i, $hash2(["filenames"], {"filenames": ["ShinobiGami"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Double\s*Cross|DX)$/i, $hash2(["filenames"], {"filenames": ["DoubleCross"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Sata\s*Supe|SS)$/i, $hash2(["filenames"], {"filenames": ["Satasupe"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Ars\s*Magica|AM)$/i, $hash2(["filenames"], {"filenames": ["ArsMagica"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Dark\s*Blaze|DB)$/i, $hash2(["filenames"], {"filenames": ["DarkBlaze"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Night\s*Wizard|NW)$/i, $hash2(["filenames"], {"filenames": ["NightWizard"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("TORG", $hash2(["filenames"], {"filenames": ["Torg"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^TORG1.5$/i, $hash2(["filenames", "class"], {"filenames": ["Torg", "Torg1_5"], "class": "Torg1_5"})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:hunters\s*moon|HM)$/i, $hash2(["filenames"], {"filenames": ["HuntersMoon"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Blood\s*Crusade|BC)$/i, $hash2(["filenames"], {"filenames": ["BloodCrusade"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Meikyu\s*Kingdom|MK)$/i, $hash2(["filenames"], {"filenames": ["MeikyuKingdom"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Earth\s*Dawn|ED)$/i, $hash2(["filenames"], {"filenames": ["EarthDawn"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:(?:Earth\s*Dawn|ED)3)$/i, $hash2(["filenames", "class"], {"filenames": ["EarthDawn", "EarthDawn3"], "class": "EarthDawn3"})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:(?:Earth\s*Dawn|ED)4)$/i, $hash2(["filenames", "class"], {"filenames": ["EarthDawn", "EarthDawn4"], "class": "EarthDawn4"})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Embryo\s*Machine|EM)$/i, $hash2(["filenames"], {"filenames": ["EmbryoMachine"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Gehenna\s*An|GA)$/i, $hash2(["filenames"], {"filenames": ["GehennaAn"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Magica\s*Logia|ML)$/i, $hash2(["filenames"], {"filenames": ["MagicaLogia"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["Nechronica", "NC"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Meikyu\s*Days|MD)$/i, $hash2(["filenames"], {"filenames": ["MeikyuDays"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["Peekaboo", "PK"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Barna\s*Kronika|BK)$/i, $hash2(["filenames"], {"filenames": ["BarnaKronika"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["RokumonSekai2", "RS2"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^(?:Monotone\s*Musium|MM)$/i, $hash2(["filenames"], {"filenames": ["MonotoneMusium"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^Zettai\s*Reido$/i, $hash2(["filenames"], {"filenames": ["ZettaiReido"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(/^Eclipse\s*Phase$/i, $hash2(["filenames"], {"filenames": ["EclipsePhase"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("NJSLYRBATTLE", $hash2(["filenames"], {"filenames": ["NjslyrBattle"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new(["ShinMegamiTenseiKakuseihen", "SMTKakuseihen"]), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("Ryutama"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("CardRanker"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("ShinkuuGakuen"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("CrashWorld"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("WitchQuest"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("BattleTech"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("Elysion"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("GeishaGirlwithKatana"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("GURPS", $hash2(["filenames"], {"filenames": ["Gurps"]})), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("GurpsFW"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("FilledWith"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("HarnMaster"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("Insane"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("KillDeathBusiness"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("Kamigakari"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("RecordOfSteam"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("Oukahoushin3rd"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("BeastBindTrinity"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("BloodMoon"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("Utakaze"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("EndBreaker"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("KanColle"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("GranCrest"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("HouraiGakuen"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("TwilightGunsmoke"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("Garako"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("ShoujoTenrankai"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("GardenOrder"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("DarkSouls"), Opal.const_get_relative($nesting, 'DiceBotLoader').$new("None", $hash2(["filenames", "class"], {"filenames": [], "class": "DiceBot"}))]);
  })($nesting[0], null, $nesting);
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
