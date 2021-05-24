"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientUtils = void 0;
class PatientUtils {
    constructor(_patientRepository) {
        this._patientRepository = _patientRepository;
    }
    async findPatientByClinic(treatmentFile) {
        const patient = await this._patientRepository.findOne({
            where: {
                clinic: treatmentFile.patient.clinic,
            },
        });
        if (patient) {
            return patient.id;
        }
        else {
            return 0;
        }
    }
    async createPatient(patient) {
        return await this._patientRepository.save(patient);
    }
    async deletePatient(id) {
        return (await this._patientRepository.delete(id)).affected;
    }
}
exports.PatientUtils = PatientUtils;
//# sourceMappingURL=patients.js.map