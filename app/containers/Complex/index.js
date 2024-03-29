/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable prettier/prettier */
import React from 'react';
import classnames from 'classnames';
import bs from 'bs';
import styles from './styles.css';
import Header from '../Layout/Header';
import building from '../../images/building.png';
import map from '../../images/map.png';
import PropertyIteam from '../../components/PropertyIteam';
import Error from '../../components/Errors';

export default function Complex() {
  return (
    <Error>
      <section className={styles.complexContainer}>
        <Header />
        <div className={classnames(bs.container)}>
          <div className={classnames(bs.row, bs['pt-4'])}>
            <div className={bs['col-12']}>
              <div
                className={classnames(
                  bs['d-flex'],
                  bs['justify-content-between'],
                )}
              >
                <div className="breadcrumbs">complexes</div>
              </div>
            </div>
          </div>
          <div className={classnames(bs.row, 'complexContentSpace')}>
            <div className={classnames(bs['col-sm-12'], bs['col-md-4'])}>
              <div className="complexWhiteBox">
                <div className={styles.mainBox}><img className={styles.mainComplexImage} src={building} alt="complex" /></div>
                <div className="sampleImageBox">
                  <div className="editImg"><img className={styles.sampleComplexImage} src={building} alt="complex" /><i className="fontIcon deleteIcon fontIconComplex fa-info-circle">&#xe800;</i></div>
                  <div className="editImg"><img className={styles.sampleComplexImage} src={building} alt="complex" /><i className="fontIcon deleteIcon fontIconComplex fa-info-circle">&#xe800;</i></div>
                  <div className="editImg"><img className={styles.sampleComplexImage} src={building} alt="complex" /><i className="fontIcon deleteIcon fontIconComplex fa-info-circle">&#xe800;</i></div>
                  <div className="editImg"><img className={styles.sampleComplexImage} src={building} alt="complex" /><i className="fontIcon deleteIcon fontIconComplex fa-info-circle">&#xe800;</i></div>
                  <div className="editImg"><img className={styles.sampleComplexImage} src={building} alt="complex" /><i className="fontIcon deleteIcon fontIconComplex fa-info-circle">&#xe800;</i></div>
                </div>
                <div className={classnames("form-group", "formInputImage")}>
                  <label className={styles.labelInput}>Build Year</label>
                  <input readOnly type="email" className={classnames('form-control', 'inputRead')} placeholder="Luxy Tower" />
                  {/* <input type="email" className={classnames("form-control","inputStyle")} placeholder="Luxy Tower"  /> */}
                </div>
                <div className={classnames("form-group", "formInputImage")}>
                  <label className={styles.labelInput}>Build Year</label>
                  <input readOnly type="email" className={classnames('form-control', 'inputRead')} placeholder="Iran-Tehran" />
                  {/* <input type="email" className={classnames("form-control","inputStyle")} placeholder="Iran-Tehran"  /> */}
                </div>
                <div>
                  <div className={styles.complexView}>
                    <a href="/" className={styles.makeComplex}>Make Complex View<sup><i className="fontIcon fontIconComplex fa-info-circle">&#xe800;</i></sup></a>
                  </div>
                  <span className={styles.complexSpan}>set floor plan and your properties and complex image</span>
                </div>
              </div>
              <img className={styles.mapImage} src={map} alt="complex" />
            </div>
            <div className={classnames(bs['col-sm-12'], bs['col-md-8'])}>
              <div className={classnames('complexWhiteBox')}>
                <div className={styles.editBoxBtn}>
                  <button type="button" className={styles.editBtn} to="/"><i className="fontIcon editIcon fontIconComplex fa-info-circle">&#xe800;</i></button>
                  <button type="button" className={styles.editBtn} to="/"><i className="fontIcon editIcon fontIconComplex fa-info-circle">&#xe800;</i></button>
                </div>
                <div className={classnames("form-group")}>
                  <label className={styles.labelInput}>Address</label>
                  <input readOnly type="text" className={classnames('form-control', 'inputRead')} placeholder="Tehran , mirdamad" />
                  {/* <input type="text" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                </div>
                <form className='complexInput'>
                  <div className={classnames("form-group", "formInput")}>
                    <label className={styles.labelInput}>Build Year</label>
                    <input readOnly type="date" className={classnames('form-control', 'inputRead')} placeholder="Build Year" />
                    {/* <input type="date" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                  </div>
                  <div className={classnames("form-group", "formInput")}>
                    <label className={styles.labelInput}>Email</label>
                    <input readOnly type="email" className={classnames('form-control', 'inputRead')} placeholder="Email" />
                    {/* <input type="email" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                  </div>
                  <div className={classnames("form-group", "formInput")}>
                    <label className={styles.labelInput}>Cadastra Code</label>
                    <input readOnly type="number" className={classnames('form-control', 'inputRead')} placeholder="Cadastra Code" />
                    {/* <input type="number" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                  </div>
                  <div className={classnames("form-group", "formInput")}>
                    <label className={styles.labelInput}>Tell</label>
                    <input readOnly type="phone" className={classnames('form-control', 'inputRead')} placeholder="Tell" />
                    {/* <input type="phone" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                  </div>
                  <div className={classnames("form-group", "formInput")}>
                    <label className={styles.labelInput}>Change Fee</label>
                    <input readOnly type="number" className={classnames('form-control', 'inputRead')} placeholder="Change Fee" />
                    {/* <input type="number" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                  </div>
                  <div className={classnames("form-group", "formInput")}>
                    <label className={styles.labelInput}>Floor Count</label>
                    <input readOnly type="number" className={classnames('form-control', 'inputRead')} placeholder="Floor Count" />
                    {/* <input type="number" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                  </div>
                  <div className={classnames("form-group", "formInput")}>
                    <label className={styles.labelInput}>Create Date</label>
                    <input readOnly type="date" className={classnames('form-control', 'inputRead')} placeholder="Create Date" />
                    {/* <input type="date" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                  </div>
                  <div className={classnames("form-group", "formInput")}>
                    <label className={styles.labelInput}>Last Update</label>
                    <input readOnly type="date" className={classnames('form-control', 'inputRead')} placeholder="Last Update" />
                    {/* <input type="date" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                  </div>
                  <div className={classnames("form-group", "formArea")}>
                    <label className={styles.labelInput}>Description</label>
                    <textarea fullWidth readOnly className="form-control" id="exampleFormControlTextarea1" rows="3">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lore
                    </textarea>
                    {/* <textarea className={classnames("form-control","inputStyle")} id="exampleFormControlTextarea1" rows="3"></textarea> */}
                  </div>
                  <div className='complexInput'>
                    <div className={classnames("form-group", "formInputManager")}>
                      <label className={styles.labelInput}>Manager</label>
                      <input readOnly type="text" className={classnames('form-control', 'inputRead')} placeholder="Manager" />
                      {/* <input type="text" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                    </div>
                    <div className={classnames("form-group", "formInputManager")}>
                      <label className={styles.labelInput}>Email</label>
                      <input readOnly type="email" className={classnames('form-control', 'inputRead')} placeholder="Email" />
                      {/* <input type="email" className={classnames("form-control","inputStyle")} placeholder={value} /> */}
                    </div>
                    <div className={classnames("form-group", "formInputManager")}>
                      <label className={styles.labelInput}>Mobile</label>
                      {/* <input readOnly type="phone" className={classnames('form-control', 'inputRead')} placeholder="Mobile" /> */}
                      <input type="phone" className={classnames("form-control", "inputStyle")} placeholder="Mobile" />
                    </div>
                    <a href="/" className={styles.editManager}>Edit Manager</a>
                  </div>
                  <div className="d-flex flex-row flex-wrap" label="Properties">
                    <PropertyIteam />
                    <PropertyIteam />
                    <PropertyIteam />
                    <PropertyIteam />
                  </div>
                  {/* edit form btn */}
                  {/* <div className={styles.btnFormBox}>
                    <button className={styles.cancelBtn} variant="danger" type="submit">
                      Cancel
                    </button>
                    <button className={styles.acceptBtn} variant="primary" type="submit">
                      Save
                    </button>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
          <div className={classnames(bs.row, bs['pt-4'])}>
            <div className={bs['col-12']}>
              <div
                className={classnames(
                  bs['d-flex'],
                  bs['justify-content-between'],
                )}
              >
              </div>
            </div>
          </div>
        </div>
      </section>
    </Error>
  );
}
