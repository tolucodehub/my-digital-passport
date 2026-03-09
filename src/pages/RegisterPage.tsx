import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Upload,
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  CreditCard,
  FileText,
} from "lucide-react";

const countries = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France",
  "Japan", "Singapore", "United Arab Emirates", "South Africa", "Nigeria",
  "India", "Brazil", "Mexico", "Spain", "Italy", "Netherlands", "Switzerland",
  "Sweden", "Norway", "Denmark", "New Zealand", "Ireland", "Other",
];

const idTypes = ["National ID", "International Passport", "Driver's License"];

const fadeVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, x: -30, transition: { duration: 0.3 } },
};

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageError, setImageError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    country: "",
    address: "",
    city: "",
    zipCode: "",
    idType: "",
    idNumber: "",
    image: null as File | null,
  });

  const updateField = (field: string, value: string | File | null) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageError("");
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setImageError("Image must be under 5MB");
      return;
    }
    if (!file.type.startsWith("image/")) {
      setImageError("Please upload an image file");
      return;
    }
    updateField("image", file);
    const reader = new FileReader();
    reader.onload = (ev) => setImagePreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    updateField("image", null);
    setImagePreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const totalSteps = 3;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-12 max-w-md w-full text-center gold-glow"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
          </motion.div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">Registration Submitted!</h2>
          <p className="text-muted-foreground font-body mb-8 leading-relaxed">
            Your registration is being processed. Please check your email for your login information. This may take up to 24 hours.
          </p>
          <Link to="/">
            <Button variant="hero" size="lg">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-5/12 relative items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-sm"
        >
          <Link to="/" className="flex items-center gap-2 mb-12">
            <img src={cmcLogo} alt="CoinMarketCap" className="w-10 h-10 rounded-lg object-contain" />
            <span className="font-display text-2xl font-bold text-foreground">
              Coin<span className="text-gradient-gold">MarketCap</span>
            </span>
          </Link>
          <h2 className="text-4xl font-display font-bold mb-6 leading-tight">
            Start Your <span className="text-gradient-gold">Trading</span> Journey
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-10">
            Complete your registration to access global markets with institutional-grade tools and ultra-low spreads.
          </p>
          <div className="space-y-4">
            {["Instant account setup", "Access 200+ instruments", "24/7 customer support"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/80 font-body text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Pocket<span className="text-gradient-gold">Broker</span>
              </span>
            </Link>
          </div>

          <h1 className="text-3xl font-display font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground font-body mb-8">Step {step} of {totalSteps}</p>

          {/* Progress */}
          <div className="flex gap-2 mb-10">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                  i < step ? "bg-gradient-gold" : "bg-secondary"
                }`}
              />
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" variants={fadeVariant} initial="hidden" animate="visible" exit="exit" className="space-y-5">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <User className="w-5 h-5" />
                    <span className="font-display font-semibold">Personal Information</span>
                  </div>
                  <div>
                    <Label className="text-foreground/80 font-body text-sm mb-2 block">Full Name *</Label>
                    <Input
                      required
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="John Doe"
                      className="bg-secondary border-border focus:border-primary h-12"
                    />
                  </div>
                  <div>
                    <Label className="text-foreground/80 font-body text-sm mb-2 block">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="john@example.com"
                        className="bg-secondary border-border focus:border-primary h-12 pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-foreground/80 font-body text-sm mb-2 block">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="+1 234 567 8900"
                        className="bg-secondary border-border focus:border-primary h-12 pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-foreground/80 font-body text-sm mb-2 block">Date of Birth *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        required
                        type="date"
                        value={form.dateOfBirth}
                        onChange={(e) => updateField("dateOfBirth", e.target.value)}
                        className="bg-secondary border-border focus:border-primary h-12 pl-10"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" variants={fadeVariant} initial="hidden" animate="visible" exit="exit" className="space-y-5">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <MapPin className="w-5 h-5" />
                    <span className="font-display font-semibold">Address Details</span>
                  </div>
                  <div>
                    <Label className="text-foreground/80 font-body text-sm mb-2 block">Country *</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <select
                        required
                        value={form.country}
                        onChange={(e) => updateField("country", e.target.value)}
                        className="w-full h-12 pl-10 pr-4 bg-secondary border border-border rounded-lg text-foreground font-body text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                      >
                        <option value="">Select your country</option>
                        {countries.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label className="text-foreground/80 font-body text-sm mb-2 block">Residential Address *</Label>
                    <Input
                      required
                      value={form.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      placeholder="123 Main Street, Apt 4B"
                      className="bg-secondary border-border focus:border-primary h-12"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-foreground/80 font-body text-sm mb-2 block">City *</Label>
                      <Input
                        required
                        value={form.city}
                        onChange={(e) => updateField("city", e.target.value)}
                        placeholder="New York"
                        className="bg-secondary border-border focus:border-primary h-12"
                      />
                    </div>
                    <div>
                      <Label className="text-foreground/80 font-body text-sm mb-2 block">ZIP / Postal Code</Label>
                      <Input
                        value={form.zipCode}
                        onChange={(e) => updateField("zipCode", e.target.value)}
                        placeholder="10001"
                        className="bg-secondary border-border focus:border-primary h-12"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="step3" variants={fadeVariant} initial="hidden" animate="visible" exit="exit" className="space-y-5">
                  <div className="flex items-center gap-2 mb-2 text-primary">
                    <FileText className="w-5 h-5" />
                    <span className="font-display font-semibold">Identification</span>
                  </div>
                  <div>
                    <Label className="text-foreground/80 font-body text-sm mb-2 block">ID Type *</Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <select
                        required
                        value={form.idType}
                        onChange={(e) => updateField("idType", e.target.value)}
                        className="w-full h-12 pl-10 pr-4 bg-secondary border border-border rounded-lg text-foreground font-body text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary appearance-none"
                      >
                        <option value="">Select ID type</option>
                        {idTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label className="text-foreground/80 font-body text-sm mb-2 block">ID Number *</Label>
                    <Input
                      required
                      value={form.idNumber}
                      onChange={(e) => updateField("idNumber", e.target.value)}
                      placeholder="Enter your ID number"
                      className="bg-secondary border-border focus:border-primary h-12"
                    />
                  </div>
                  <div>
                    <Label className="text-foreground/80 font-body text-sm mb-2 block">Upload ID Photo * (max 5MB)</Label>
                    <div
                      onClick={() => fileRef.current?.click()}
                      className="glass-card rounded-xl border-2 border-dashed border-border hover:border-primary/50 transition-colors cursor-pointer p-8 text-center"
                    >
                      {imagePreview ? (
                        <div className="relative inline-block">
                          <img src={imagePreview} alt="ID preview" className="max-h-40 rounded-lg mx-auto" />
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); removeImage(); }}
                            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-destructive flex items-center justify-center"
                          >
                            <X className="w-3 h-3 text-destructive-foreground" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                          <p className="text-sm text-muted-foreground font-body">Click to upload your ID photo</p>
                          <p className="text-xs text-muted-foreground/60 font-body mt-1">JPG, PNG up to 5MB</p>
                        </>
                      )}
                    </div>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    {imageError && <p className="text-destructive text-xs mt-2 font-body">{imageError}</p>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-10">
              {step > 1 ? (
                <Button type="button" variant="ghost" onClick={() => setStep(step - 1)} className="text-muted-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
              ) : (
                <div />
              )}
              {step < totalSteps ? (
                <Button type="button" variant="hero" onClick={() => setStep(step + 1)}>
                  Continue <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="submit" variant="hero" size="lg">
                  Submit Registration <ArrowRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
