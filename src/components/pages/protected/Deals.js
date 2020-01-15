import React from 'react';
import {DummyCompanyLogo} from '../../common/Graphics';

const DealsPage = () => 
    <div className="page-deals page-all-deals">
        <div className="title">
			<div className="row">
				<div className="col-sm-9">
					<h1>All deals</h1>
				</div>
				<div className="col-sm-3">
					<a href="#" className="btn btn-normal btn-plus">Add New Deal</a>
				</div>
			</div>
		</div>
		<div className="md-tabs tab-deals">
			<div className="tab-nav">
				<ul className="nav" role="tablist">
					<li className="nav-item">
						<a className="nav-link-top active" data-toggle="tab" href="#currentdeals" role="tab">Current deals</a>
					</li>
					<li className="nav-item">
						<a className="nav-link-top" data-toggle="tab" href="#pastdeals" role="tab">Past deals</a>
					</li>
				</ul>
			</div>
			<div className="md-seach-filter">
				<form>
					<div className="search clearfix">
						<div className="is-search">
							<input type="text" className="form-control" placeholder="Search" />
							<button className="btn-search"></button>
						</div>
						<div className="filter">
							<a href="#" className="btn btn-normal btn-filter">Filter</a>
						</div>
					</div>
				</form>
			</div>
			<div className="tab-content">
				<div className="tab-pane fade show active" id="currentdeals" role="tabpanel">
					<div className="md-table-normal">
						<table className="table">
							<thead>
								<tr>
									<td className="company">
										<div className="tbl-title">
											<span>Company</span> <span className="ico"></span>
										</div>
									</td>
									<td className="market">
										<div className="tbl-title">
											<span>Market Capital</span> <span className="ico"></span>
                                        </div>
									</td>
									<td className="last-price">
										<div className="tbl-title">
											<span>Last Price</span> <span className="ico"></span>
										</div>
									</td>
									<td className="raise-price">
										<div className="tbl-title">
											<span>Cap Raise Price</span> <span className="ico"></span>
										</div>
									</td>
									<td className="captipal-raise">
										<div className="tbl-title">
											<span>Capital Raise</span> <span className="ico"></span>
										</div>
									</td>
									<td className="discount">
										<div className="tbl-title">
											<span>Discount</span> <span className="ico"></span>
										</div>
									</td>
									<td className="bids-due">
										<div className="tbl-title">
											<span>Bids Due</span> <span className="ico"></span>
										</div>
									</td>
									<td className="settlement-date">
										<div className="tbl-title">
											<span>Settlement Date</span> <span className="ico"></span>
										</div>
									</td>
									<td className="copy">
										<div className="tbl-title">
											<span></span>&nbsp;
										</div>
									</td>
									<td className="arrow">
										<div className="tbl-title">
											<span></span>&nbsp;
										</div>
									</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="no-wrap">
										<div className="is-checkbox">
											<div className="ui checkbox">
												<input type="checkbox" name="example" />
												<label className="title title-checkbox"></label>
											</div>
										</div>
										<div className="company-logo">
											<img src={DummyCompanyLogo} alt="" />
										</div>
										<div className="company-name">
											<span>Cieden</span>
										</div>
									</td>
									<td>
										<div className="text">$43mn</div>
									</td>
									<td>
										<div className="text">$7.25</div>
									</td>
									<td>
										<div className="text">$20mn</div>
									</td>
									<td>
										<div className="text">$20mn</div>
									</td>
									<td>
										<div className="text">4%</div>
									</td>
									<td>
										<div className="text">Today<span>6:30PM</span></div>
									</td>
									<td>
										<div className="text">Oct. 26, 2019<span>8:00PM</span></div>
									</td>
									<td>
										<span className="copy"></span>
									</td>
									<td>
										<span className="arrow"></span>
									</td>
								</tr>
								<tr className="hidden">
									<td colspan="10">
										<div className="timeline">
											<div className="item clearfix">
												<div className="date-time">
													<span className="date">Oct. 26, 2019</span>
													<span>8:00PM</span>
												</div>
												<div className="action">
													<span>Create a bill</span>
												</div>
											</div>
											<div className="item clearfix">
												<div className="date-time">
													<span className="date">Oct. 26, 2019</span>
													<span>8:15PM</span>
												</div>
												<div className="action">
													<span>
														Confirmation
													</span>
												</div>
											</div>
										</div>
									</td>
								</tr>
								<tr className="active">
									<td className="no-wrap">
										<div className="is-checkbox">
											<div className="ui checkbox">
												<input type="checkbox" name="example" />
												<label className="title title-checkbox"></label>
											</div>
										</div>
										<div className="company-logo">
											<img src={DummyCompanyLogo} alt="" />
										</div>
										<div className="company-name">
											<span>Cieden</span>
										</div>
									</td>
									<td>
										<div className="text">$43mn</div>
									</td>
									<td>
										<div className="text">$7.25</div>
									</td>
									<td>
										<div className="text">$20mn</div>
									</td>
									<td>
										<div className="text">$20mn</div>
									</td>
									<td>
										<div className="text">4%</div>
									</td>
									<td>
										<div className="text">Today<span>6:30PM</span></div>
									</td>
									<td>
										<div className="text">Oct. 26, 2019<span>8:00PM</span></div>
									</td>
									<td>
										<span className="copy"></span>
									</td>
									<td>
										<span className="arrow"></span>
									</td>
								</tr>
								<tr className="hidden">
									<td colspan="10">
										<div className="timeline">
											<div className="item clearfix">
												<div className="date-time">
													<span className="date">Oct. 26, 2019</span>
													<span>8:00PM</span>
												</div>
												<div className="action">
													<span>Create a bill</span>
												</div>
											</div>
											<div className="item clearfix">
												<div className="date-time">
													<span className="date">Oct. 26, 2019</span>
													<span>8:15PM</span>
												</div>
												<div className="action">
													<span>
														Confirmation
													</span>
												</div>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="tab-pane fade" id="pastdeals" role="tabpanel">
					<div className="md-table-normal">
						<table className="table">
							<thead>
								<tr>
									<td className="company">
										<div className="tbl-title">
											<span>Company</span> <span className="ico"></span>
										</div>
									</td>
									<td className="market">
										<div className="tbl-title">
											<span>Market Capital</span> <span className="ico"></span>
                                        </div>
									</td>
									<td className="last-price">
										<div className="tbl-title">
											<span>Last Price</span> <span className="ico"></span>
										</div>
									</td>
									<td className="raise-price">
										<div className="tbl-title">
											<span>Cap Raise Price</span> <span className="ico"></span>
										</div>
									</td>
									<td className="captipal-raise">
										<div className="tbl-title">
											<span>Capital Raise</span> <span className="ico"></span>
										</div>
									</td>
									<td className="discount">
										<div className="tbl-title">
											<span>Discount</span> <span className="ico"></span>
										</div>
									</td>
									<td className="bids-due">
										<div className="tbl-title">
											<span>Bids Due</span> <span className="ico"></span>
										</div>
									</td>
									<td className="settlement-date">
										<div className="tbl-title">
											<span>Settlement Date</span> <span className="ico"></span>
										</div>
									</td>
									<td className="copy">
										<div className="tbl-title">
											<span></span>&nbsp;
										</div>
									</td>
									<td className="arrow">
										<div className="tbl-title">
											<span></span>&nbsp;
										</div>
									</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="no-wrap">
										<div className="is-checkbox">
											<div className="ui checkbox">
												<input type="checkbox" name="example" />
												<label className="title title-checkbox"></label>
											</div>
										</div>
										<div className="company-logo">
											<img src={DummyCompanyLogo} alt="" />
										</div>
										<div className="company-name">
											<span>Cieden</span>
										</div>
									</td>
									<td>
										<div className="text">$43mn</div>
									</td>
									<td>
										<div className="text">$7.25</div>
									</td>
									<td>
										<div className="text">$20mn</div>
									</td>
									<td>
										<div className="text">$20mn</div>
									</td>
									<td>
										<div className="text">4%</div>
									</td>
									<td>
										<div className="text">Today<span>6:30PM</span></div>
									</td>
									<td>
										<div className="text">Oct. 26, 2019<span>8:00PM</span></div>
									</td>
									<td>
										<span className="copy"></span>
									</td>
									<td>
										<span className="arrow"></span>
									</td>
								</tr>
								<tr className="hidden">
									<td colspan="10">
										<div className="timeline">
											<div className="item clearfix">
												<div className="date-time">
													<span className="date">Oct. 26, 2019</span>
													<span>8:00PM</span>
												</div>
												<div className="action">
													<span>Create a bill</span>
												</div>
											</div>
											<div className="item clearfix">
												<div className="date-time">
													<span className="date">Oct. 26, 2019</span>
													<span>8:15PM</span>
												</div>
												<div className="action">
													<span>
														Confirmation
													</span>
												</div>
											</div>
										</div>
									</td>
								</tr>
								<tr className="active">
									<td className="no-wrap">
										<div className="is-checkbox">
											<div className="ui checkbox">
												<input type="checkbox" name="example" />
												<label className="title title-checkbox"></label>
											</div>
										</div>
										<div className="company-logo">
											<img src={DummyCompanyLogo} alt="" />
										</div>
										<div className="company-name">
											<span>Cieden</span>
										</div>
									</td>
									<td>
										<div className="text">$43mn</div>
									</td>
									<td>
										<div className="text">$7.25</div>
									</td>
									<td>
										<div className="text">$20mn</div>
									</td>
									<td>
										<div className="text">$20mn</div>
									</td>
									<td>
										<div className="text">4%</div>
									</td>
									<td>
										<div className="text">Today<span>6:30PM</span></div>
									</td>
									<td>
										<div className="text">Oct. 26, 2019<span>8:00PM</span></div>
									</td>
									<td>
										<span className="copy"></span>
									</td>
									<td>
										<span className="arrow"></span>
									</td>
								</tr>
								<tr className="hidden">
									<td colspan="10">
										<div className="timeline">
											<div className="item clearfix">
												<div className="date-time">
													<span className="date">Oct. 26, 2019</span>
													<span>8:00PM</span>
												</div>
												<div className="action">
													<span>Create a bill</span>
												</div>
											</div>
											<div className="item clearfix">
												<div className="date-time">
													<span className="date">Oct. 26, 2019</span>
													<span>8:15PM</span>
												</div>
												<div className="action">
													<span>
														Confirmation
													</span>
												</div>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
    </div>

export default DealsPage;