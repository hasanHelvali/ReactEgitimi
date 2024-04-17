import React from 'react'
import { Formik,Form } from 'formik'
import CustomInput from './CustomInput';
import CustomCheckbox from './CustomCheckbox';
import CustomSelect from './CustomSelect';
import { Link } from 'react-router-dom';
import { advancedSchema } from '../schemas';
const onSubmit = async (values, actions) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };
  
function PortalForm() {
  return (
    <>
          <Formik
        initialValues={{ username: '', university: '', isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={advancedSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <CustomInput
              label="Kullancı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı Adınızı Giriniz"
            />
            <CustomSelect
              label="Okulunuz"
              name="university"
              placeholder="Kullanıcı Üniversitenizi Seçiniz"
            >
              <option value="">Lütfen Üniversiteniz Seçiniz</option>
              <option value="firat">Fırat Üniversitesi</option>
              <option value="tou">Turgut Özal Üniversitesi</option>
              <option value="rteu">Recep Tayyip Erdoğan Üniversitesi</option>
              <option value="itu">İTÜ</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="isAccepted" />
            <button disabled={isSubmitting} type="submit">
              Kaydet
            </button>
            <Link className="formLink" to="/">
              Ana Forma Git
            </Link>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default PortalForm