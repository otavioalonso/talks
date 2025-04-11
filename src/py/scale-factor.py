import numpy as np
import matplotlib.pyplot as plt
import scipy
from scipy.integrate import solve_ivp

plt.rcParams['savefig.dpi'] = 300
plt.rcParams['text.usetex']= True
plt.rcParams['font.family']= 'serif'
plt.rcParams['font.serif']= 'cm'
plt.rcParams['font.size']= 10
plt.rcParams['pgf.texsystem']= "pdflatex"
plt.rcParams['pgf.rcfonts']= False
plt.rcParams['lines.linewidth'] = 1.75

def get_at(Omega_m, w0, wa):
    
    Omega_k = 0
    m_nu = 0.059
    h_fid = 0.70

    hubble_time = 9.77813106/h_fid #in Gyr

    Tcmb = 2.7260 * 8.6173303e-5 # in eV
    Tnu = (4./11.)**(1./3.) * Tcmb
    H0 = h_fid * 2.13311968e-33   # in eV
    Mplanck = 1.22089007e28      # in eV
    crit_dens = 3./8./np.pi * (H0 * Mplanck)**2 # in eV^4
    Omega_g = np.pi**2 / 15 * Tcmb**4 / crit_dens
    Neff = 3.044
    Omega_nu_rel = 7./8. * (4./11.)**(4./3.) * Neff * Omega_g # relativistic neutrinos
    Omega_nu_nr = 6/11/np.pi**2 * scipy.special.zeta(3) * Neff * Tcmb**3 * m_nu /crit_dens # non-relativistic neutrinos

    fermi_dirac_factor = np.vectorize(lambda mu: 120./(7.*np.pi**4) * scipy.integrate.quad(lambda x: x**2 *np.sqrt(x**2 + mu**2) / (np.exp(x) + 1.), 0, np.inf)[0])
    x = np.geomspace(1e-4, 1e4, 200)
    interp = scipy.interpolate.interp1d(np.log(x), np.log(fermi_dirac_factor(x)), fill_value='extrapolate')
    fermi_dirac_factor = lambda x: np.exp(interp(np.log(x)))

    Omega_nu = np.vectorize(lambda z: Omega_nu_rel * fermi_dirac_factor(m_nu / (1+z) / Tnu))
    Omega_de = lambda z: (1 - Omega_m - Omega_k - Omega_g - Omega_nu(z)) * (1.+z)**(3*(1. + w0 + wa)) * np.exp(-3.*wa * z/(1.+z))
    Hz = lambda z: np.sqrt(Omega_k*(1+z)**2 + Omega_m*(1+z)**3 + (Omega_g + Omega_nu(z))*(1+z)**4 + Omega_de(z))
    aHa = lambda t, a: a*Hz((1-a)/a)/hubble_time

    # Initial conditions
    a0 = 1e-5  # Start with a tiny scale factor
    t_span = (0, 25)
    t_eval = np.linspace(t_span[0], t_span[1], 100)  # Evaluation points

    # Solve the differential equation
    solution = solve_ivp(aHa, t_span, [a0], t_eval=t_eval)

    a_solution = solution.y[0]

    now = solution.t[np.argmin(a_solution < 1)]

    return solution.t, a_solution

# Plot the results
fig, ax = plt.subplots(figsize=(3, 1.5))
# plt.axvline(0, c='gray', ls='solid')
plt.axhline(1, c='gray', ls='solid')
# plt.plot(*get_at(0.3239, -1, 0), c='black', ls='dashed')
# plt.plot(*get_at(0.3239, -0.771, -0.82), c='red', ls='solid')
plt.plot(*get_at(1, -1, 0), c='red', ls='solid')
plt.xlabel('Time (billion years)')
plt.ylabel('a(t)')
# plt.title('Our Universe')
plt.xlim(0, 25)
plt.ylim(0, 2)
# plt.xlim(-now, t_span[1]-now)
# plt.gca().xaxis.set_inverted(True)
plt.grid(True)

# Set the figure background color to be transparent
fig.patch.set_alpha(0.0)

# Set the axes background color to be transparent
ax.set_facecolor('none')

# If you save the figure, make sure to save it with a transparent background
plt.savefig(f'../../public/image/scale-factor.svg', transparent=True, bbox_inches='tight', pad_inches=0)