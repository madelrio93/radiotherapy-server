import PDFDocument from 'pdfkit';

export const generatePDF = async (): Promise<Buffer> => {
  const data = {
    id: 11,
    consultationDate: '2021-06-21',
    status: 'no tratado',
    patient: {
      id: 2,
      name: 'Jade Oconnor',
      lastName: 'Roberson',
      sex: 'Femenino',
      clinic: '303112',
      age: 31,
      phone: 28,
      municipality: 'Delectus eius volup',
      province: 'Et ipsa dolor quo e',
      address: 'Impedit id volupta',
    },
    speciaList: {
      name: 'koko',
      lastName: 'lolo',
    },
    equipment: {
      name: 'SO',
    },
    location: {
      name: 'Oreja',
    },
    origin: {
      name: 'Higado',
    },
    stage: {
      name: 'okoas',
    },
    priority: 0,
    imageIndication: false,
    description: '',
  };

  const pdfBuffer: Buffer = await new Promise((resolve) => {
    const doc = new PDFDocument({
      size: 'LETTER',
      bufferPages: true,
    });

    // customize your PDF document
    doc.text(`Fecha de Consulta: ${data.consultationDate}`, 100, 50, {});
    doc.text(`Estado: ${data.status}`, 100, 70);
    doc.text(
      `Nombre del Paciente: ${data.patient.name} ${data.patient.lastName}`,
      100,
      90
    );

    doc.end();

    const buffer = [];
    doc.on('data', buffer.push.bind(buffer));
    doc.on('end', () => {
      const data = Buffer.concat(buffer);
      resolve(data);
    });
  });

  return pdfBuffer;
};
