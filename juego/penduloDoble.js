function PenduloDoble(_angle1,_w1,_mass1,_length1,_angle2,_w2,_mass2,_length2){
	this.p1 = Pendulo(_angle1,_w1,_mass1,_length1);
	this.p2 = Pendulo(_angle2,_w2,_mass2,_length2);
	var p1Mass = p1.GetMass();
	this.mu = (p1Mass + p2.GetMass()) / p1Mass;
}


PenduloDoble::PenduloDoble(double  _angle1,  double  _w1,  double  _mass1,  double  _length1, double  _angle2,  double  _w2,  double  _mass2,  double  _length2) : p1(_angle1,_w1,_mass1,_length1), p2(_angle2, _w2, _mass2, _length2){
	double p1Mass = p1.GetMass();
	mu = (p1Mass + p2.GetMass()) / p1Mass;
}


#define H 0.00009
#define G 9.780326

class PenduloDoble {
	Pendulo p1;
	Pendulo p2;
	double mu;

	double & CalcW1Derivative();
	double & CalcW2Derivative();

	void CalcNextW1();
	void CalcNextTeta1();
	void CalcNextw2();
	void CalcNextTeta2();

	void DrawLines();

public:
	PenduloDoble(double  _angle1,  double  _w1,  double  _mass1,  double  _length1, double  _angle2,  double  _w2,  double  _mass2,  double  _length2);
	void SetPendulumsPos();
};