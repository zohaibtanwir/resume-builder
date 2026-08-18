import "./style.scss";

export default function Page() {
	return (
		<div className="cv-page m-auto bg-white relative w-[210mm] px-[60px] py-[50px] text-[#2a2a2e]">
			<section id="name-and-title" className="min-h-[7rem]">
				<div className="w-full h-full">
					<div
						id="name"
						className="w-full font-medium text-4xl font-sans tracking-widest leading-[2.8rem]"
					>
						Sabah Sadique Shaikh
					</div>
					<div id="title" className="text-[#5d5d5d] mt-5 font-light text-sm">
						Senior Product Owner / Business Analyst with 13+ years of capital
						markets experience across Fixed Income, Repo, FX, OTC Derivatives,
						Equities and Money Markets. Experience in electronic trading,
						Calypso, front-to-back workflows, RFQ/RFO, Repo, FIX, multi-venue
						connectivity, regulatory reporting and product delivery. Experienced
						in translating business requirements into trading solutions and
						delivering products across Agile teams.
					</div>
				</div>
			</section>
			<div className="cv-body flex mt-6 relative">
				<div className="absolute w-full border-b-[1.5px] border-[#d6d6d6] left-0"></div>
				<div className="cv-rail w-[20.5rem] border-r-[1.5px] border-[#d6d6d6]">
					<section id="details">
						<div className="mt-8">
							<h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
								DETAILS
							</h1>
						</div>
						<div className="mt-5">
							<h2 className="text-xs font-semibold tracking-wide">ADDRESS</h2>
							<p
								id="address"
								className="text-[#5d5d5d] font-light text-xs mt-1"
							>
								Pune, India
							</p>
						</div>
						<div className="mt-3">
							<h2 className="text-xs font-semibold tracking-wide">PHONE</h2>
							<p id="phone" className="text-[#5d5d5d] font-light text-xs mt-1">
								+91 8999 604 108
							</p>
						</div>
						<div className="mt-3">
							<h2 className="text-xs font-semibold tracking-wide">EMAIL</h2>
							<p id="email" className="text-[#5d5d5d] font-light text-xs mt-1">
								sabahtanwir@gmail.com
							</p>
						</div>
					</section>
					<section id="links">
						<div className="mt-8">
							<h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
								LINKS
							</h1>
						</div>
						<ul className="mt-3">
							<li>
								<a
									href="https://www.linkedin.com/in/sabah-shaikh-77a37a145/"
									target="_blank"
									id="linkedin"
									className="text-[#5d5d5d] font-light text-xs mt-1 underline"
									rel="noopener"
								>
									LinkedIn
								</a>
							</li>
						</ul>
					</section>
					<section id="certifications">
						<div className="mt-8">
							<h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
								CERTIFICATIONS
							</h1>
						</div>
						<ul className="mt-3 text-[#2a2a2e]">
							<li>
								<p className="font-light text-xs mt-2">
									Certified Scrum Product Owner (CSPO), 2025
								</p>
							</li>
						</ul>
					</section>
					<section id="skills">
						<div className="mt-8">
							<h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
								TRADING
							</h1>
						</div>
						<ul className="mt-3 text-[#2a2a2e]">
							<li>
								<p className="font-light text-xs mt-2">
									Institutional Repo Platforms
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									Real-Time Blotters &amp; UI
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">RFQ / RFO Execution</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									Switches, EFPs &amp; MOC
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Fixed Income</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Repo &amp; Collateral</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Money Markets</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">OTC Derivatives</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Equities</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Calypso Front-to-Back</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									FIX Protocol Workflow Design
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									API &amp; SWIFT Integration
								</p>
							</li>
						</ul>
					</section>
					<section id="regulatory">
						<div className="mt-8">
							<h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
								REGULATORY
							</h1>
						</div>
						<ul className="mt-3 text-[#2a2a2e]">
							<li>
								<p className="font-light text-xs mt-2">Quoting Obligations</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									Real-Time Audit &amp; Trade Reports
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									IBOR / SOFR Transition
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">ICMA Standards</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">HKTR, MAS, MiFID</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									Pre &amp; Post-Trade Risk Controls
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									P&amp;L and Accounting
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">CAPL / OPL</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Reference Data</p>
							</li>
						</ul>
					</section>
					<section id="product-delivery">
						<div className="mt-8">
							<h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
								PRODUCT
							</h1>
						</div>
						<ul className="mt-3 text-[#2a2a2e]">
							<li>
								<p className="font-light text-xs mt-2">RFP Responses</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									Discovery &amp; Client Walkthroughs
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									BRDs &amp; User Stories
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Acceptance Criteria</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									Backlog Prioritisation
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Release Planning</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Agile / Scrum</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Stakeholder Alignment</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									UAT &amp; Regression Testing
								</p>
							</li>
						</ul>
					</section>
					<section id="tools">
						<div className="mt-8">
							<h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
								PLATFORMS
							</h1>
						</div>
						<ul className="mt-3 text-[#2a2a2e]">
							<li>
								<p className="font-light text-xs mt-2">Tradeweb</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">
									Bloomberg (TNP, FMP, RUNZ, DL)
								</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">MarketAxess</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Calypso</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">TLM Reconciliation</p>
							</li>
							<li>
								<p className="font-light text-xs mt-2">Jira &amp; Confluence</p>
							</li>
						</ul>
					</section>
				</div>
				<div className="w-full pl-10">
					<div>
						<section id="work-experience">
							<div className="mt-8">
								<h1 className="text-xl font-semibold tracking-widest after:block after:left-0 after:bottom-0 after:w-[30px] after:border-b-2 after:border-black after:mt-1">
									WORK EXPERIENCE
								</h1>
							</div>
							<div className="mt-5 mb-10">
								<ul className="mt-4 text-[#2a2a2e] text-xs font-light">
									{/* TRADING TECHNOLOGIES */}
									<li>
										<div>
											<div className="flex role-header">
												<div className="w-3/4 font-semibold text-sm">
													<h1>
														Senior Product Manager, Fixed Income &amp; Repo
														Trading
													</h1>
													<h2 className="font-light">Trading Technologies</h2>
												</div>
												<div className="ml-auto">
													<p>Mumbai, India</p>
												</div>
											</div>
											<div className="mt-1 role-dates">
												<p>Apr 2025 - Present</p>
											</div>
											<div className="mt-3 ml-8 text-[#5d5d5d]">
												<ul className="list-disc role-bullets">
													<li className="mt-2">
														<span className="font-semibold">
															Product ownership:
														</span>{" "}
														owned end-to-end delivery of a white-labelled
														interdealer trading platform spanning order entry,
														RFQ/RFO negotiation, live quoting, execution, trade
														capture and trading history.
													</li>
													<li className="mt-2">
														<span className="font-semibold">
															Dealer and market-making:
														</span>{" "}
														designed and delivered market-making capabilities
														including quoting obligations, automated liquidity
														monitoring, inventory tracking and compliance
														reporting.
													</li>
													<li className="mt-2">
														<span className="font-semibold">
															Repo and collateral:
														</span>{" "}
														led the functional design and delivery of
														ICMA-compliant Repo Basket workflows covering
														import, validation, allocation, substitution and
														end-to-end trade lifecycle processing.
													</li>
													<li className="mt-2">
														<span className="font-semibold">
															Risk and trade controls:
														</span>{" "}
														defined pre- and post-trade risk controls, trading
														limits and real-time risk reconciliation, and
														designed Repo calculations covering purchase and
														repurchase prices, accrued interest, haircuts,
														margins and MTM margin calls.
													</li>
													<li className="mt-2">
														<span className="font-semibold">
															Agile delivery:
														</span>{" "}
														led client discovery, requirements definition, BRDs,
														user stories, acceptance criteria and backlog
														prioritisation across a cross-functional team,
														launching Phase 1 within 8 months.
													</li>
													<li className="mt-2">
														<span className="font-semibold">
															FIX and client integration:
														</span>{" "}
														owned FIX 5.0 SP2 requirements and certification for
														bonds and Repo, maintaining specifications for
														client-specific enhancements and protocol changes.
													</li>
													<li className="mt-2">
														<span className="font-semibold">
															Venue integration:
														</span>{" "}
														partnered with MarketAxess, Tradeweb and Bloomberg
														to assess new protocol capabilities, translate them
														into product requirements and drive adoption across
														the dealer platform.
													</li>
													<li className="mt-2">
														<span className="font-semibold">
															Regulatory and reporting:
														</span>{" "}
														defined quoting rules, wire-time requirements,
														automated trade reporting and market-reference
														reporting covering yields, pricing, benchmarks and
														collateral performance.
													</li>
												</ul>
											</div>
										</div>
									</li>

									{/* CLSA */}
									<li className="mt-4">
										<div>
											<div className="flex role-header">
												<div className="w-3/4 font-semibold text-sm">
													<h1>
														Senior Front Office Business Analyst, FICC / EQD
													</h1>
													<h2 className="font-light">CLSA</h2>
												</div>
												<div className="ml-auto">
													<p>Pune, India</p>
												</div>
											</div>
											<div className="mt-1 role-dates">
												<p>Nov 2018 - Apr 2025</p>
											</div>
											<div className="mt-3 ml-8 text-[#5d5d5d]">
												<ul className="list-disc role-bullets">
													<li className="mt-2">
														<span className="font-semibold">
															Calypso platform management:
														</span>{" "}
														managed front and middle office requirements and
														product releases across FX, Fixed Income, OTC
														Derivatives, Equities and Money Markets.
													</li>
													<li className="mt-2">
														<span className="font-semibold">
															Entity and product onboarding:
														</span>{" "}
														onboarded new legal entities, trade lifecycles,
														execution workflows, pricing, SWIFT messaging,
														accounting and P&amp;L reporting.
													</li>
													<li className="mt-2">
														<span className="font-semibold">
															IBOR and data integrations:
														</span>{" "}
														implemented IBOR transition rate curves for RFR
														currencies and built regulatory reporting pipelines
														for HKTR, MAS and MiFID.
													</li>
													<li className="mt-2">
														<span className="font-semibold">
															Market data sourcing:
														</span>{" "}
														implemented quote and Bond/Equity definitions on the
														Bloomberg DL module, and re-sourced rates from
														Spectrum to replace Bloomberg feeds.
													</li>
													<li className="mt-2">
														Led the OPL and CAPL implementation, improving
														system integration and streamlining downstream
														processes.
													</li>
													<li className="mt-2">
														Reconciled TLM breaks and closed the underlying
														gaps, improving trade reporting accuracy.
													</li>
												</ul>
											</div>
										</div>
									</li>

									{/* BARCLAYS */}
									<li className="mt-4">
										<div>
											<div className="flex role-header">
												<div className="w-3/4 font-semibold text-sm">
													<h1>Product Owner, Interest Rate Risk &amp; ALM</h1>
													<h2 className="font-light">Barclays</h2>
												</div>
												<div className="ml-auto">
													<p>Pune, India</p>
												</div>
											</div>
											<div className="mt-1 role-dates">
												<p>Nov 2014 - Nov 2018</p>
											</div>
											<div className="mt-3 ml-8 text-[#5d5d5d]">
												<ul className="list-disc role-bullets">
													<li className="mt-2">
														Consolidated ALM data schemas across source systems
														and reconciled SAP accounting ledgers to model
														Interest Rate Risk in the Banking Book, covering
														both structural and basis risk.
													</li>
													<li className="mt-2">
														Defined complex rate transformation rules with the
														risk and QRM model teams, using THOR and Markit data
														feeds.
													</li>
												</ul>
											</div>
										</div>
									</li>

									{/* L&T INFOTECH / CITI */}
									<li className="mt-4">
										<div>
											<div className="flex role-header">
												<div className="w-3/4 font-semibold text-sm">
													<h1>Business Analyst / QA, Equities</h1>
													<h2 className="font-light">
														L&amp;T Infotech (client: Citi)
													</h2>
												</div>
												<div className="ml-auto">
													<p>Pune, India</p>
												</div>
											</div>
											<div className="mt-1 role-dates">
												<p>Mar 2013 - Nov 2014</p>
											</div>
											<div className="mt-3 ml-8 text-[#5d5d5d]">
												<ul className="list-disc role-bullets">
													<li className="mt-2">
														Executed FIX tag certifications for broker and
														exchange onboarding, and tested Smart Order Routing
														across Direct Market Access, the Program Trading
														Engine and Global Order Routing.
													</li>
												</ul>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
