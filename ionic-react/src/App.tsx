import { IonAlert, IonApp, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React, { useRef, useState } from 'react';
import BmiControls from './components/BmiControls';
import BmiResult from './components/BmiResult';

const App: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = useState<number>();
  const [error, setError] = useState<string>();

  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const calculateBmi = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value;

    // null or empty string
    if (!enteredWeight || !enteredHeight || +enteredWeight <= 0 || +enteredHeight <= 0) {
      // alert("Please enter valid (non-negative) numbers!");
      setError("Please enter a valid (non-negative) input number.");
      return;
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight);

    setCalculatedBmi(bmi);
  };
  const resetInputs = () => {
    weightInputRef.current!.value = '';
    heightInputRef.current!.value = '';
  };
  const clearError = () => {
    setError('');
  };

  
  return (
    <React.Fragment>
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Height</IonLabel>
                  <IonInput type="number" ref={heightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="floating">Your Weight</IonLabel>
                  <IonInput type="number" ref={weightInputRef}></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <BmiControls onCalculate={calculateBmi} onReset={resetInputs} />

            {calculatedBmi && (
              <BmiResult result={calculatedBmi} />
            )}
          </IonGrid>
        </IonContent>
      </IonApp>
      <IonAlert 
        isOpen={!(!error)}
        message={error}
        buttons={[
          { text: "Okay", handler: clearError }
        ]} 
      />
    </React.Fragment>
  );
};

export default App;
