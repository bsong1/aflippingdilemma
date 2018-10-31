/******************** 
 * Experiment2 Test *
 ********************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'use prefs'
});

// store info about the experiment session:
let expName = 'Experiment2';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Instructional_IntroRoutineBegin);
flowScheduler.add(Instructional_IntroRoutineEachFrame);
flowScheduler.add(Instructional_IntroRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(IdentifyBiasRoutineBegin);
flowScheduler.add(IdentifyBiasRoutineEachFrame);
flowScheduler.add(IdentifyBiasRoutineEnd);
flowScheduler.add(quitPsychoJS);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);

  return Scheduler.Event.NEXT;
}

var Instructional_IntroClock;
var Instructionaltext1;
var ToContinue;
var Researcher_FlipsClock;
var Researcher1Label;
var Researcher1Image;
var Researcher1FlipLabel;
var CurrentFLip;
var ToMoveOnText;
var Researcher2Label;
var Researcher2image;
var Currentflip2;
var Researcher2FlipLabel;
var reminder;
var Pause1Clock;
var Halfsecondpause1;
var IdentifyBiasClock;
var BiasInstructions;
var identifyresearcher2;
var identifyresearcher1;
var identresearcher1;
var identresearcher2;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructional_Intro"
  Instructional_IntroClock = new util.Clock();
  Instructionaltext1 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Instructionaltext1',
    text : 'In this task, you are being asked to determine which of these researchers has the biased coin.\nOnce you hit the space bar, you will be presented with two researchers and their coin flip. \nYou will need to keep track of each researcher\'s coin flips by marking if they had heads or tails. \nYour goal is to quickly identify which researcher is using the biased coin but, by default, you will have up to 50 flips to make your decision. \nOnce you have determined which researcher has the biased coin, press "s" to stop. \nYou will then be asked to choose which researcher you believe has the biased coin.',
    font : 'Arial',
    pos : [0, 0.1], height : 0.065,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : 0.0 
  });
  
  ToContinue = new visual.TextStim({
    win : psychoJS.window,
    name : 'ToContinue',
    text : "When you are ready to begin press 'Space'",
    font : 'Arial',
    pos : [0, (- 0.65)], height : 0.075,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -1.0 
  });
  
  // Initialize components for Routine "Researcher_Flips"
  Researcher_FlipsClock = new util.Clock();
  
  Researcher1Label = new visual.TextStim({
    win : psychoJS.window,
    name : 'Researcher1Label',
    text : 'Researcher 1',
    font : 'Arial',
    pos : [(0 - 0.6), 0.35], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -1.0 
  });
  
  Researcher1Image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Researcher1Image', 
    image : 'BF1.jpg', mask : undefined,
    ori : 0, pos : [(0 - 0.6), 0.7], size : [0.5, 0.5],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Researcher1FlipLabel = new visual.TextStim({
    win : psychoJS.window,
    name : 'Researcher1FlipLabel',
    text : 'Current Flip',
    font : 'Arial',
    pos : [(0 - 0.6), 0.23], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -3.0 
  });
  
  CurrentFLip = new visual.TextStim({
    win : psychoJS.window,
    name : 'CurrentFLip',
    text : 'default text',
    font : 'Arial',
    pos : [0.6, (- 0.1)], height : 0.35,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -4.0 
  });
  
  ToMoveOnText = new visual.TextStim({
    win : psychoJS.window,
    name : 'ToMoveOnText',
    text : "Press 'Space' to move onto the next flip\nPress 's' if you believe you can identify the biased coin",
    font : 'Arial',
    pos : [0, (- 0.6)], height : 0.07,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -5.0 
  });
  
  Researcher2Label = new visual.TextStim({
    win : psychoJS.window,
    name : 'Researcher2Label',
    text : 'Researcher 2',
    font : 'Arial',
    pos : [0.6, 0.35], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -6.0 
  });
  
  Researcher2image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Researcher2image', 
    image : 'WF1.jpg', mask : undefined,
    ori : 0, pos : [0.6, 0.7], size : [0.5, 0.5],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  Currentflip2 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Currentflip2',
    text : 'default text',
    font : 'Arial',
    pos : [(- 0.6), (- 0.1)], height : 0.35,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -8.0 
  });
  
  Researcher2FlipLabel = new visual.TextStim({
    win : psychoJS.window,
    name : 'Researcher2FlipLabel',
    text : 'Current Flip',
    font : 'Arial',
    pos : [0.6, 0.23], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -9.0 
  });
  
  reminder = new visual.TextStim({
    win : psychoJS.window,
    name : 'reminder',
    text : "Remember: Try to keep track of the researcher's flips",
    font : 'Arial',
    pos : [0, (- 0.8)], height : 0.05,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -11.0 
  });
  
  // Initialize components for Routine "Pause1"
  Pause1Clock = new util.Clock();
  Halfsecondpause1 = new visual.TextStim({
    win : psychoJS.window,
    name : 'Halfsecondpause1',
    text : None,
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Initialize components for Routine "IdentifyBias"
  IdentifyBiasClock = new util.Clock();
  BiasInstructions = new visual.TextStim({
    win : psychoJS.window,
    name : 'BiasInstructions',
    text : 'Which researcher did you believe had the biased coin?',
    font : 'Arial',
    pos : [0, (- 0.7)], height : 0.08,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : 0.0 
  });
  
  identifyresearcher2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'identifyresearcher2', 
    image : 'WF1.jpg', mask : undefined,
    ori : 0, pos : [0.6, 0.5], size : [0.5, 0.5],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  identifyresearcher1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'identifyresearcher1', 
    image : 'BF1.jpg', mask : undefined,
    ori : 0, pos : [(- 0.6), 0.5], size : [0.5, 0.5],
    color : new util.Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  identresearcher1 = new visual.TextStim({
    win : psychoJS.window,
    name : 'identresearcher1',
    text : "     Press 'Q' if you believe \nresearcher 1 had the biased coin",
    font : 'Arial',
    pos : [(- 0.6), 0.1], height : 0.08,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -4.0 
  });
  
  identresearcher2 = new visual.TextStim({
    win : psychoJS.window,
    name : 'identresearcher2',
    text : "     Press 'P' if you believe\nresearcher 2 had the biased coin",
    font : 'Arial',
    pos : [0.6, 0.1], height : 0.085,  wrapWidth : undefined, ori: 0,
    color : new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity : 1,
    depth : -5.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var key_resp_2;
var Instructional_IntroComponents;
function Instructional_IntroRoutineBegin() {
  //------Prepare to start Routine 'Instructional_Intro'-------
  t = 0;
  Instructional_IntroClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Instructional_IntroComponents = [];
  Instructional_IntroComponents.push(Instructionaltext1);
  Instructional_IntroComponents.push(ToContinue);
  Instructional_IntroComponents.push(key_resp_2);
  
  for (const thisComponent of Instructional_IntroComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function Instructional_IntroRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instructional_Intro'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Instructional_IntroClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Instructionaltext1* updates
  if (t >= 0.0 && Instructionaltext1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Instructionaltext1.tStart = t;  // (not accounting for frame time here)
    Instructionaltext1.frameNStart = frameN;  // exact frame index
    Instructionaltext1.setAutoDraw(true);
  }
  
  // *ToContinue* updates
  if (t >= 0.0 && ToContinue.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ToContinue.tStart = t;  // (not accounting for frame time here)
    ToContinue.frameNStart = frameN;  // exact frame index
    ToContinue.setAutoDraw(true);
  }
  
  // *key_resp_2* updates
  if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_2.tStart = t;  // (not accounting for frame time here)
    key_resp_2.frameNStart = frameN;  // exact frame index
    key_resp_2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    key_resp_2.clock.reset();  // now t=0
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (key_resp_2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_2.keys = theseKeys[theseKeys.length-1]  // just the last key pressed
      key_resp_2.rt = key_resp_2.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Instructional_IntroComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Instructional_IntroRoutineEnd() {
  //------Ending Routine 'Instructional_Intro'-------
  for (const thisComponent of Instructional_IntroComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(key_resp_2.keys) >= 0) {    // No response was made
      key_resp_2.keys = undefined;
  }
  psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
  if (key_resp_2.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
      routineTimer.reset();
      }
  // the Routine "Instructional_Intro" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS,
    nReps: 50, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'Flipset.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importTrialAttributes(thisTrial));
    thisScheduler.add(Researcher_FlipsRoutineBegin);
    thisScheduler.add(Researcher_FlipsRoutineEachFrame);
    thisScheduler.add(Researcher_FlipsRoutineEnd);
    thisScheduler.add(Pause1RoutineBegin);
    thisScheduler.add(Pause1RoutineEachFrame);
    thisScheduler.add(Pause1RoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);
  psychoJS.experiment.save({
    attributes: trials.getAttributes()
  });

  return Scheduler.Event.NEXT;
}

var key_resp_3;
var Researcher_FlipsComponents;
function Researcher_FlipsRoutineBegin() {
  //------Prepare to start Routine 'Researcher_Flips'-------
  t = 0;
  Researcher_FlipsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  
  key_resp_3 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  Researcher_FlipsComponents = [];
  Researcher_FlipsComponents.push(Researcher1Label);
  Researcher_FlipsComponents.push(Researcher1Image);
  Researcher_FlipsComponents.push(Researcher1FlipLabel);
  Researcher_FlipsComponents.push(CurrentFLip);
  Researcher_FlipsComponents.push(ToMoveOnText);
  Researcher_FlipsComponents.push(Researcher2Label);
  Researcher_FlipsComponents.push(Researcher2image);
  Researcher_FlipsComponents.push(Currentflip2);
  Researcher_FlipsComponents.push(Researcher2FlipLabel);
  Researcher_FlipsComponents.push(key_resp_3);
  Researcher_FlipsComponents.push(reminder);
  
  for (const thisComponent of Researcher_FlipsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function Researcher_FlipsRoutineEachFrame() {
  //------Loop for each frame of Routine 'Researcher_Flips'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Researcher_FlipsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *Researcher1Label* updates
  if (t >= 0.0 && Researcher1Label.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Researcher1Label.tStart = t;  // (not accounting for frame time here)
    Researcher1Label.frameNStart = frameN;  // exact frame index
    Researcher1Label.setAutoDraw(true);
  }
  
  // *Researcher1Image* updates
  if (t >= 0.0 && Researcher1Image.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Researcher1Image.tStart = t;  // (not accounting for frame time here)
    Researcher1Image.frameNStart = frameN;  // exact frame index
    Researcher1Image.setAutoDraw(true);
  }
  
  // *Researcher1FlipLabel* updates
  if (t >= 0.0 && Researcher1FlipLabel.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Researcher1FlipLabel.tStart = t;  // (not accounting for frame time here)
    Researcher1FlipLabel.frameNStart = frameN;  // exact frame index
    Researcher1FlipLabel.setAutoDraw(true);
  }
  
  // *CurrentFLip* updates
  if (t >= 0.0 && CurrentFLip.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    CurrentFLip.tStart = t;  // (not accounting for frame time here)
    CurrentFLip.frameNStart = frameN;  // exact frame index
    CurrentFLip.setAutoDraw(true);
  }
  if (CurrentFLip.status === PsychoJS.Status.STARTED){ // only update if being drawn
    CurrentFLip.setText(Flipset1);
  }
  
  // *ToMoveOnText* updates
  if (t >= 0.0 && ToMoveOnText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    ToMoveOnText.tStart = t;  // (not accounting for frame time here)
    ToMoveOnText.frameNStart = frameN;  // exact frame index
    ToMoveOnText.setAutoDraw(true);
  }
  
  // *Researcher2Label* updates
  if (t >= 0.0 && Researcher2Label.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Researcher2Label.tStart = t;  // (not accounting for frame time here)
    Researcher2Label.frameNStart = frameN;  // exact frame index
    Researcher2Label.setAutoDraw(true);
  }
  
  // *Researcher2image* updates
  if (t >= 0.0 && Researcher2image.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Researcher2image.tStart = t;  // (not accounting for frame time here)
    Researcher2image.frameNStart = frameN;  // exact frame index
    Researcher2image.setAutoDraw(true);
  }
  
  // *Currentflip2* updates
  if (t >= 0.0 && Currentflip2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Currentflip2.tStart = t;  // (not accounting for frame time here)
    Currentflip2.frameNStart = frameN;  // exact frame index
    Currentflip2.setAutoDraw(true);
  }
  if (Currentflip2.status === PsychoJS.Status.STARTED){ // only update if being drawn
    Currentflip2.setText(Flipset2);
  }
  
  // *Researcher2FlipLabel* updates
  if (t >= 0.0 && Researcher2FlipLabel.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Researcher2FlipLabel.tStart = t;  // (not accounting for frame time here)
    Researcher2FlipLabel.frameNStart = frameN;  // exact frame index
    Researcher2FlipLabel.setAutoDraw(true);
  }
  
  // *key_resp_3* updates
  if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_3.tStart = t;  // (not accounting for frame time here)
    key_resp_3.frameNStart = frameN;  // exact frame index
    key_resp_3.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    key_resp_3.clock.reset();  // now t=0
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (key_resp_3.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space', 's']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_3.keys = key_resp_3.keys.concat(theseKeys);  // storing all keys
      key_resp_3.rt = key_resp_3.rt.concat(key_resp_3.clock.getTime());
      // was this 'correct'?
      if (key_resp_3.keys == "'s'") {
          key_resp_3.corr = 1;
      } else {
          key_resp_3.corr = 0;
      }
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // *reminder* updates
  if (t >= 0.0 && reminder.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    reminder.tStart = t;  // (not accounting for frame time here)
    reminder.frameNStart = frameN;  // exact frame index
    reminder.setAutoDraw(true);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Researcher_FlipsComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Researcher_FlipsRoutineEnd() {
  //------Ending Routine 'Researcher_Flips'-------
  for (const thisComponent of Researcher_FlipsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (['', [], undefined].indexOf(key_resp_3.keys) >= 0) {    // No response was made
      key_resp_3.keys = undefined;
  }
  // was no response the correct answer?!
  if (key_resp_3.keys == undefined) {
    if (psychoJS.str("'s'").toLowerCase() == 'none') {
       key_resp_3.corr = 1  // correct non-response
    } else {
       key_resp_3.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
  psychoJS.experiment.addData('key_resp_3.corr', key_resp_3.corr);
  if (key_resp_3.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
      routineTimer.reset();
      }
  // the Routine "Researcher_Flips" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var Pause1Components;
function Pause1RoutineBegin() {
  //------Prepare to start Routine 'Pause1'-------
  t = 0;
  Pause1Clock.reset(); // clock
  frameN = -1;
  routineTimer.add(0.500000);
  // update component parameters for each repeat
  // keep track of which components have finished
  Pause1Components = [];
  Pause1Components.push(Halfsecondpause1);
  
  for (const thisComponent of Pause1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function Pause1RoutineEachFrame() {
  //------Loop for each frame of Routine 'Pause1'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = Pause1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *Halfsecondpause1* updates
  if (t >= 0.0 && Halfsecondpause1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    Halfsecondpause1.tStart = t;  // (not accounting for frame time here)
    Halfsecondpause1.frameNStart = frameN;  // exact frame index
    Halfsecondpause1.setAutoDraw(true);
  }
  frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (Halfsecondpause1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    Halfsecondpause1.setAutoDraw(false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of Pause1Components)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function Pause1RoutineEnd() {
  //------Ending Routine 'Pause1'-------
  for (const thisComponent of Pause1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var key_resp_4;
var IdentifyBiasComponents;
function IdentifyBiasRoutineBegin() {
  //------Prepare to start Routine 'IdentifyBias'-------
  t = 0;
  IdentifyBiasClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_4 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  IdentifyBiasComponents = [];
  IdentifyBiasComponents.push(BiasInstructions);
  IdentifyBiasComponents.push(key_resp_4);
  IdentifyBiasComponents.push(identifyresearcher2);
  IdentifyBiasComponents.push(identifyresearcher1);
  IdentifyBiasComponents.push(identresearcher1);
  IdentifyBiasComponents.push(identresearcher2);
  
  for (const thisComponent of IdentifyBiasComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function IdentifyBiasRoutineEachFrame() {
  //------Loop for each frame of Routine 'IdentifyBias'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = IdentifyBiasClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *BiasInstructions* updates
  if (t >= 0.0 && BiasInstructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    BiasInstructions.tStart = t;  // (not accounting for frame time here)
    BiasInstructions.frameNStart = frameN;  // exact frame index
    BiasInstructions.setAutoDraw(true);
  }
  
  // *key_resp_4* updates
  if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_4.tStart = t;  // (not accounting for frame time here)
    key_resp_4.frameNStart = frameN;  // exact frame index
    key_resp_4.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    key_resp_4.clock.reset();  // now t=0
  }
  if (key_resp_4.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['q', 'p']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_4.keys = theseKeys[theseKeys.length-1]  // just the last key pressed
      key_resp_4.rt = key_resp_4.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // *identifyresearcher2* updates
  if (t >= 0.0 && identifyresearcher2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    identifyresearcher2.tStart = t;  // (not accounting for frame time here)
    identifyresearcher2.frameNStart = frameN;  // exact frame index
    identifyresearcher2.setAutoDraw(true);
  }
  
  // *identifyresearcher1* updates
  if (t >= 0.0 && identifyresearcher1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    identifyresearcher1.tStart = t;  // (not accounting for frame time here)
    identifyresearcher1.frameNStart = frameN;  // exact frame index
    identifyresearcher1.setAutoDraw(true);
  }
  
  // *identresearcher1* updates
  if (t >= 0.0 && identresearcher1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    identresearcher1.tStart = t;  // (not accounting for frame time here)
    identresearcher1.frameNStart = frameN;  // exact frame index
    identresearcher1.setAutoDraw(true);
  }
  
  // *identresearcher2* updates
  if (t >= 0.0 && identresearcher2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    identresearcher2.tStart = t;  // (not accounting for frame time here)
    identresearcher2.frameNStart = frameN;  // exact frame index
    identresearcher2.setAutoDraw(true);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of IdentifyBiasComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function IdentifyBiasRoutineEnd() {
  //------Ending Routine 'IdentifyBias'-------
  for (const thisComponent of IdentifyBiasComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(key_resp_4.keys) >= 0) {    // No response was made
      key_resp_4.keys = undefined;
  }
  psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
  if (key_resp_4.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
      routineTimer.reset();
      }
  // the Routine "IdentifyBias" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importTrialAttributes(thisTrial) {
  return function () {
    psychoJS.importAttributes(thisTrial);

    return Scheduler.Event.NEXT;
  };
}


function quitPsychoJS() {
  psychoJS.window.close();
  psychoJS.quit();

  return Scheduler.Event.QUIT;
}
