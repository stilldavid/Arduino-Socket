int flex = 0;

void setup() {
  pinMode(A0, INPUT);
  Serial.begin(9600);
}

void loop() {
  flex = analogRead(A0);
  //flex = map(flex, 600, 900, 0, 180);
  Serial.println(flex);
  delay(150);
}
